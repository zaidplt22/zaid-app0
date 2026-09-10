import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';
import {defineConfig, Plugin} from 'vite';

function syncManuscriptsPlugin(): Plugin {
  return {
    name: 'sync-manuscripts-plugin',
    configureServer(server) {
      server.middlewares.use('/api/sync-manuscripts', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const parsed = JSON.parse(body);
              const images = parsed.images || [];

              const imagesDir = path.resolve(__dirname, 'public/images');
              const webtoappImagesDir = path.resolve(__dirname, 'webtoapp_bundle/images');
              if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
              if (!fs.existsSync(webtoappImagesDir)) fs.mkdirSync(webtoappImagesDir, { recursive: true });

              images.forEach((img: any, idx: number) => {
                if (img.imageUrl && img.imageUrl.includes(';base64,')) {
                  const base64Data = img.imageUrl.split(';base64,')[1];
                  const ext = img.imageUrl.includes('image/png') ? 'png' : 'jpg';
                  const fileName = img.fileName || `manuscript-${String(idx + 1).padStart(2, '0')}.${ext}`;
                  fs.writeFileSync(path.join(imagesDir, fileName), base64Data, 'base64');
                  fs.writeFileSync(path.join(webtoappImagesDir, fileName), base64Data, 'base64');
                }
              });

              // Also write public/manuscripts_data.json
              fs.writeFileSync(
                path.resolve(__dirname, 'public/manuscripts_data.json'),
                JSON.stringify(images, null, 2),
                'utf-8'
              );

              // Re-run package script
              exec('python3 scripts/create_export_packages.py', () => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, count: images.length }));
              });
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: String(err) }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      viteSingleFile({ removeViteModuleLoader: true }),
      syncManuscriptsPlugin(),
    ],
    build: {
      cssCodeSplit: false,
      assetsInlineLimit: 100000000,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
