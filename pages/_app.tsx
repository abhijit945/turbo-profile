'use client';

import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'nextra-theme-docs/style.css';
import { useEffect, useState } from 'react';
import '../styles/main.css';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const title = 'Portfolio - Abhijit Rao';
  const description = `Brain dump`;
  const image = '/icons/main.svg';
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/favicon.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon/favicon-32x32.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="Abhijit Rao's Blog" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AbhijitRao_" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
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
