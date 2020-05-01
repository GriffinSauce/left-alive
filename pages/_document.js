import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Left Alive</title>
          <link rel="icon" href="/favicon.ico" />

          <link href="//www.google-analytics.com" rel="dns-prefetch" />
          <link href="/img/icons/favicon.ico" rel="shortcut icon" />
          <link
            href="/img/icons/touch.png"
            rel="apple-touch-icon-precomposed"
          />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#00869d" />

          <meta
            property="og:title"
            content="Left Alive - Pop punk from the heart"
          />
          <meta property="og:url" content="http://www.leftalive.nl/" />
          <meta
            property="og:image"
            content="http://www.leftalive.nl/wp-content/themes/LeftAliveWPTheme/img/leftalive.jpg"
          />
          <meta
            property="og:description"
            content="Danceable, fast-paced and super energetic: Left Alive play pop punk from the heart!"
          />
          <meta property="og:site_name" content="Left Alive" />

          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700,400italic,700italic"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="stylesheet" href="https://use.typekit.net/fue2pbb.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
