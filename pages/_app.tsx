'use client';

import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'nextra-theme-docs/style.css';
import { useEffect, useState } from 'react';
import '../styles/main.css';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily:
            "'Inter var', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI'",
          colorScheme: 'light',
        }}>
        <main>
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </>
  ) : null;
}
