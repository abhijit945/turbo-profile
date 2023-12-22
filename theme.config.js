/* eslint-disable import/no-anonymous-default-export */
import MainLogo from './src/app/components/MainLogo';

const YEAR = new Date().getFullYear();

/** @type {import('nextra-theme-blog').NextraBlogTheme} */
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
  darkMode: false,
  editLink: {
    component: () => <></>,
  },
  feedback: {
    content: null,
  },
  logo: () => {
    return <MainLogo width={'100%'} height={24} />;
  },
  footer: {
    text: (
      <footer
        style={{
          display: 'flex',
          userSelect: 'none',
          alignContent: 'center',
          flex: 1,
          justifyContent: 'center',
          color: 'gray',
        }}>
        <time>{YEAR}</time>
        <p>© Abhijit Rao.</p>
      </footer>
    ),
  },
};
