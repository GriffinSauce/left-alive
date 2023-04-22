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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Mulish:ital,wght@0,800;0,900;1,900&display=swap"
          rel="stylesheet"
        />

        <script
          async
          defer
          data-domain="leftalive.nl"
          src="https://plausible.io/js/plausible.js"
        />
        <script
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
