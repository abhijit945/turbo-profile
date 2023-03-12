import Document, { Head, Html, Main, NextScript } from 'next/document';
import { createGetInitialProps } from '@mantine/next';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;
  meta = {
    title: 'Abhijit Rao',
    description: 'Personal Blog from Abhijit Rao.',
    image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png',
  };
  render() {
    return (
      <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={this.meta.description} />
        <meta property="og:site_name" content={this.meta.title} />
        <meta property="og:description" content={this.meta.description} />
        <meta property="og:title" content={this.meta.title} />
        <meta property="og:image" content={this.meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AbhijitRao_" />
        <meta name="twitter:title" content={this.meta.title} />
        <meta name="twitter:description" content={this.meta.description} />
        <meta name="twitter:image" content={this.meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    );
  }
}