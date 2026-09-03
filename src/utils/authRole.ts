import { useState, useEffect } from 'react';

const ADMIN_STORAGE_KEY = 'sharikh_is_admin';
const AUTH_EVENT = 'sharikh-auth-changed';

/**
 * Checks whether the current session has admin / owner privileges.
 * Detects URL parameters (?admin=true, ?owner=true, ?key=1357900) or persistent localStorage flag.
 */
export function checkIsAdmin(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const params = new URLSearchParams(window.location.search);
    const hasAdminParam =
      params.get('admin') === 'true' ||
      params.get('admin') === '1' ||
      params.get('owner') === 'true' ||
      params.get('owner') === '1' ||
      params.get('key') === '1357900';

    if (hasAdminParam) {
      localStorage.setItem(ADMIN_STORAGE_KEY, 'true');
      return true;
    }

    return localStorage.getItem(ADMIN_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

/**
 * Updates the admin state and notifies all components.
 */
export function setAdminRole(isAdmin: boolean): void {
  if (typeof window === 'undefined') return;

  try {
    if (isAdmin) {
      localStorage.setItem(ADMIN_STORAGE_KEY, 'true');
    } else {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
      // Remove admin params from URL without reloading
      const url = new URL(window.location.href);
      url.searchParams.delete('admin');
      url.searchParams.delete('owner');
      url.searchParams.delete('key');
      window.history.replaceState({}, '', url.toString());
    }
    window.dispatchEvent(new Event(AUTH_EVENT));
  } catch (e) {
    console.error('Failed to update admin role', e);
  }
}

/**
 * Hook providing current role and enforcing strict visitor print/download protection.
 */
export function useAuthRole() {
  const [isAdmin, setIsAdminState] = useState<boolean>(() => checkIsAdmin());

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAdminState(checkIsAdmin());
    };

    window.addEventListener(AUTH_EVENT, handleAuthChange);
    window.addEventListener('storage', handleAuthChange);
    return () => {
      window.removeEventListener(AUTH_EVENT, handleAuthChange);
      window.removeEventListener('storage', handleAuthChange);
    };
  }, []);

  // Strict Visitor Protection: Block Print & Save shortcuts and add print CSS
  useEffect(() => {
    // 1. Inject or remove @media print { body { display: none !important; } }
    const styleId = 'visitor-print-protection-style';
    let styleTag = document.getElementById(styleId) as HTMLStyleElement | null;

    if (!isAdmin) {
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = styleId;
        styleTag.innerHTML = `
          @media print {
            body, html, #root {
              display: none !important;
              visibility: hidden !important;
              height: 0 !important;
              overflow: hidden !important;
            }
          }
        `;
        document.head.appendChild(styleTag);
      }
    } else {
      if (styleTag && styleTag.parentNode) {
        styleTag.parentNode.removeChild(styleTag);
      }
    }

    // 2. Intercept and disable Ctrl+P / Cmd+P and Ctrl+S / Cmd+S for visitors
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAdmin) return;

      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      if (cmdOrCtrl && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (cmdOrCtrl && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleBeforePrint = (e: Event) => {
      if (!isAdmin) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('beforeprint', handleBeforePrint);

    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('beforeprint', handleBeforePrint);
    };
  }, [isAdmin]);

  const unlockWithPin = (pin: string): boolean => {
    const normalized = pin.trim().replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString());
    if (normalized === '1357900') {
      setAdminRole(true);
      return true;
    }
    return false;
  };

  const lockToVisitor = () => {
    setAdminRole(false);
  };

  return {
    isAdmin,
    unlockWithPin,
    authenticateWithPin: unlockWithPin,
    lockToVisitor,
  };
}
