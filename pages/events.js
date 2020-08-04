import Nav from '../components/Nav';
import Hero from '../components/Hero';
import EventsList from '../components/EventsList';
import Footer from '../components/Footer';
import { getEvents } from '../services/db';

const Events = ({ events }) => {
  return (
    <div className="bg-gray-300">
      <Nav />
      <Hero compact />

      <article className={`container grid -mt-10 sm:-mt-48`}>
        <h1 className="py-4 text-3xl text-center bg-white sm:text-5xl">
          Events
        </h1>

        <div className="grid gap-3 p-6 text-lg bg-white">
          <EventsList events={events} />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      events: await getEvents(),
    },
  };
}

export default Events;
