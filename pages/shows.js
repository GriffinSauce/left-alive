import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import ShowsList from '../components/ShowsList';
import Footer from '../components/Footer';
import { getShows } from '../services/db';

const Shows = ({ shows }) => {
  return (
    <>
      <Head>
        <title>Left Alive - Shows</title>
        <meta property="og:title" content="Left Alive - Shows" />
      </Head>
      <div className="bg-gray-300">
        <Nav />
        <Hero compact />

        <article className="container relative grid -mt-10 sm:-mt-48">
          <h1 className="py-4 text-3xl text-center bg-white sm:text-5xl">
            shows
          </h1>

          <div className="grid gap-3 p-6 text-lg bg-white">
            <ShowsList shows={shows} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      shows: await getShows(),
    },
  };
}

export default Shows;
