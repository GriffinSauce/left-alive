import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import AirtableContent from '../components/AirtableContent';
import ShowsWidget from '../components/ShowsWidget';
import Footer from '../components/Footer';
import { getContentByKey, getUpcomingShows } from '../services/db';

const About = ({ content, futureShows }) => {
  return (
    <>
      <Head>
        <title>Left Alive - About us</title>
        <meta property="og:title" content="Left Alive - About us" />
      </Head>
      <div>
        <Nav />
        <Hero />

        <article className="container relative grid -mt-10 sm:-mt-40">
          <div className="bg-black grid gap-6">
            <div className="grid gap-3 p-6 text-lg">
              <h1 className="py-4 text-6xl sm:text-5xl">
                <AirtableContent content={content.header} />
              </h1>

              <AirtableContent
                className="m-8 text-3xl italic text-center font-display text-primary-600"
                content={content.quote}
              />
              <AirtableContent content={content.nl} className="grid gap-3" />
              <hr className="my-10" />
              <AirtableContent content={content.en} className="grid gap-3" />
            </div>
            <ShowsWidget shows={futureShows} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const [header, quote, nl, en, futureShows] = await Promise.all([
    getContentByKey('about-header'),
    getContentByKey('about-quote'),
    getContentByKey('about-nl'),
    getContentByKey('about-en'),
    getUpcomingShows(),
  ]);
  return {
    props: {
      content: {
        header,
        quote,
        nl,
        en,
      },
      futureShows,
    },
  };
}

export default About;
