import Image from 'next/image';

/* eslint-disable import/no-anonymous-default-export */
const YEAR = new Date().getFullYear();

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  project: {
    link: 'https://github.com/abhijit945',
  },
  useNextSeoProps() {
    return {
      titleTemplate: 'Abhijit Rao - %s',
    };
  },
  primaryHue: 330,
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
  logo: () => {
    return <Image alt="brand" width={48} height={48} src="/favicon/favicon.png"/>;
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
