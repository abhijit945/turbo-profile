'use client';

import { cn } from '../@/lib/utils';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import 'nextra-theme-docs/style.css';
import { useEffect, useState } from 'react';
import '../styles/main.css';

const monty = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <main
      className={cn(
        monty.className,
        'overscroll-auto',
        'scroll-smooth',
        'antialiased',
      )}>
      <Component {...pageProps} />
    </main>
  ) : null;
}
