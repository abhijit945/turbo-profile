import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;
  title = 'Portfolio - Abhijit Rao';
  description = 'Brain dump';
  image =
    'https://raw.githubusercontent.com/abhijit945/turbo-profile/main/public/icons/main.svg';
  render() {
    return (
      <Html lang="en">
        <Head>
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
          <meta
            name="apple-mobile-web-app-title"
            content="Abhijit Rao's Blog"
          />
          <meta name="robots" content="follow, index" />
          <meta name="description" content={this.description} />
          <meta property="og:site_name" content={this.title} />
          <meta property="og:description" content={this.description} />
          <meta property="og:title" content={this.title} />
          <meta property="og:image" content={this.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@AbhijitRao_" />
          <meta name="twitter:title" content={this.title} />
          <meta name="twitter:description" content={this.description} />
          <meta name="twitter:image" content={this.image} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
