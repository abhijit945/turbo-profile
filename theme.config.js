/* eslint-disable import/no-anonymous-default-export */
import MainLogo from './components/MainLogo';

const YEAR = new Date().getFullYear();

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  project: {
    link: 'https://github.com/abhijit945',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Abhijit Rao',
    };
  },
  primaryHue: 330,
  toc: {
    float: true,
    title: () => 'On this page',
  },
  darkMode: false,
  editLink: {
    component: () => <></>,
  },
  feedback: {
    content: null,
  },
  head: () => {
    const title = 'Portfolio - Abhijit Rao';
    const description = `Brain dump`;
    const image = '/icons/main.svg';
    return (
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/favicon.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon-32x32.png" />
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
      </>
    );
  },
  logo: () => {
    return <MainLogo width={'100%'} height={24} />;
  },
  footer: {
    text: (
      <footer
        style={{
          display: 'flex',
          alignContent: 'center',
          flex: 1,
          justifyContent: 'start',
          color: 'gray',
        }}>
        <time>{YEAR}</time> © Abhijit Rao.
      </footer>
    ),
  },
};
