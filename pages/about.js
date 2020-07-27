import Nav from '../components/Nav';
import Hero from '../components/Hero';
import AirtableContent from '../components/AirtableContent';
import { getContentByKey } from '../utils/airtable';

const About = ({ content }) => {
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
      </article>
    </div>
  );
};

export async function getStaticProps() {
  const [header, quote, nl, en] = await Promise.all([
    getContentByKey('about-header'),
    getContentByKey('about-quote'),
    getContentByKey('about-nl'),
    getContentByKey('about-en'),
  ]);
  return {
    props: {
      content: {
        header,
        quote,
        nl,
        en,
      },
    },
  };
}

export default About;
