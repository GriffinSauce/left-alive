import Document, { Html, Head, Main, NextScript } from 'next/document';
import Squiggle from '../components/Squiggle';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Squiggle />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
