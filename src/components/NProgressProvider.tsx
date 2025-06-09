// components/NProgressProvider.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // your styles

NProgress.configure({ showSpinner: false });

export default function NProgressProvider() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    // small delay ensures visibility even for fast transitions
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
