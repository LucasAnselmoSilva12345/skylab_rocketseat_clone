import ThemeConatiner from '../contexts/theme/ThemeContainer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeConatiner>
      <Component {...pageProps} />
    </ThemeConatiner>
  );
}

export default MyApp;
