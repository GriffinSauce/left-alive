import Nav from '../components/Nav';
import Hero from '../components/Hero';
import AirtableContent from '../components/AirtableContent';
import EventsWidget from '../components/EventsWidget';
import Footer from '../components/Footer';
import { getContentByKey, getUpcomingEvents } from '../services/db';

const About = ({ content, futureEvents }) => {
  return (
    <div className="bg-gray-300">
      <Nav />
      <Hero />

      <article className="container grid -mt-10 sm:-mt-40">
        <h1 className="py-4 text-3xl text-center text-white bg-primary-500 sm:text-5xl">
          <AirtableContent content={content.header} />
        </h1>

        <div className="grid gap-3 p-6 text-lg bg-white">
          <AirtableContent
            className="m-8 text-2xl italic text-center font-display text-secondary-500"
            content={content.quote}
          />
          <AirtableContent content={content.nl} />
          <hr className="my-10" />
          <AirtableContent content={content.en} />
        </div>
        <div className="mt-6">
          <EventsWidget events={futureEvents} />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const [header, quote, nl, en, futureEvents] = await Promise.all([
    getContentByKey('about-header'),
    getContentByKey('about-quote'),
    getContentByKey('about-nl'),
    getContentByKey('about-en'),
    getUpcomingEvents(),
  ]);
  return {
    props: {
      content: {
        header,
        quote,
        nl,
        en,
      },
      futureEvents,
    },
  };
}

export default About;
