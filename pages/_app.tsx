'use client';

import clsx from 'clsx';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import 'nextra-theme-docs/style.css';
import { useEffect, useState } from 'react';
import '../styles/main.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <main className={clsx(inter.className, 'overscroll-auto', 'scroll-smooth')}>
      <Component {...pageProps} />
    </main>
  ) : null;
}
