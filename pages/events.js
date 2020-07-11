import Nav from '../components/Nav';
import Hero from '../components/Hero';
import EventsList from '../components/EventsList';

const About = () => {
  return (
    <div className="bg-gray-300">
      <Nav />
      <Hero />

      <article className={`container grid -mt-10 sm:-mt-40`}>
        <h1 className="py-4 text-3xl text-center bg-white sm:text-5xl">
          Events
        </h1>

        <div className="grid gap-3 p-6 text-lg bg-white">
          <EventsList />
        </div>
      </article>
    </div>
  );
};

// export async function getStaticProps(context) {
//   return {
//     props: {},
//   };
// }

export default About;
