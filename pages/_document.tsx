import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class _Document extends Document {
  title = 'Abhijit Rao - Portfolio';
  description = 'Personal blog and portfolio site';
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/favicon.png" color="#000000" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link rel="icon" type="image/svg+xml" href="/favicon/favicon.png" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="apple-mobile-web-app-title"
            content="Personal blog and portfolio site"
          />
          <meta name="robots" content="follow, index" />
          <meta name="description" content={this.description} />
          <meta property="og:site_name" content={this.title} />
          <meta property="og:description" content={this.description} />
          <meta property="og:title" content={this.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@AbhijitRao_" />
          <meta name="twitter:title" content={this.title} />
          <meta name="twitter:description" content={this.description} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
