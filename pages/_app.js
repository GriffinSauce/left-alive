import Head from 'next/head';
import '../styles/index.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Left Alive - Pop punk from the heart</title>
        <link rel="icon" href="/favicon.ico" />

        <link href="/img/icons/favicon.ico" rel="shortcut icon" />
        <link href="/img/icons/touch.png" rel="apple-touch-icon-precomposed" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#00869d" />

        <meta
          property="og:title"
          content="Left Alive - Pop punk from the heart"
        />
        <meta property="og:url" content="http://www.leftalive.nl/" />
        <meta
          property="og:image"
          content="http://www.leftalive.nl/img/img/leftalive.jpg"
        />
        <meta
          property="og:description"
          content="Danceable, fast-paced and super energetic: Left Alive play pop punk from the heart!"
        />
        <meta property="og:site_name" content="Left Alive" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://p.typekit.net" crossorigin />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="https://use.typekit.net/fue2pbb.css"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="https://use.typekit.net/fue2pbb.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
