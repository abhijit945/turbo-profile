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
  toc: {
    float: true,
    title: () => 'On this page',
  },
  editLink: {
    component: () => <></>,
  },
  feedback: {
    content: null,
  },
  head: () => {
    const title = 'Abhijit Rao - Blog';
    const description = `Brain dump`;
    const image = '/icons/main.svg';
    return (
      <>
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
          justifyContent: 'center',
        }}>
        <time>{YEAR}</time> © Abhijit Rao.
      </footer>
    ),
  },
};
