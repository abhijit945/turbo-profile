import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const image =
  'https://raw.githubusercontent.com/abhijit945/turbo-profile/main/public/icons/main.svg';

export const metadata: Metadata = {
  title: 'Abhijit Rao - Portfolio',
  description: 'Personal blog and portfolio site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={metadata.description as string} />
        <meta property="og:site_name" content={metadata.title as string} />
        <meta
          property="og:description"
          content={metadata.description as string}
        />
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AbhijitRao_" />
        <meta name="twitter:title" content={metadata.title as string} />
        <meta
          name="twitter:description"
          content={metadata.description as string}
        />
        <meta name="twitter:image" content={image} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
