import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Head>
        <title>Left Alive zoekt podiumbeest!</title>
        <meta property="og:title" content="Left Alive zoekt podiumbeest!" />
      </Head>
      <div className="bg-gray-300">
        <Nav />
        <Hero noLogo />

        <article className="container relative grid -mt-10 sm:-mt-40">
          <h1 className="py-4 text-3xl text-center text-white bg-primary-600 sm:text-5xl">
            Left Alive zoekt een podiumbeest!
          </h1>

          <div className="grid gap-3 p-6 text-lg bg-white">
            {/* <div className="m-8 text-3xl italic text-center font-display text-secondary-500"></div> */}
            <div className="grid gap-3">
              <p>
                Wij zijn een <span className="font-bold">poppunk</span> band uit
                de randstad. Onze missie is het samenbrengen van mensen en ze de
                avond van hun leven geven. We maken dansbare poppunk in de stijl
                van Neck Deep, Paramore, Hands Like Houses en Normandie. We
                willen nieuw werk schrijven, muziek uitbrengen en veel optreden!
              </p>

              <p>
                Check onze{' '}
                <a
                  className="font-bold"
                  href="https://open.spotify.com/playlist/51FUakLjdZHZ56wi6Mmkld?si=fa2a406c93ff484b"
                >
                  inspiratie-playlist op spotify
                </a>
              </p>

              <hr className="my-3" />

              <div>
                <p className="font-bold text-primary-600">Wij zoeken een:</p>
                <h2>Ervaren frontvrouw/-man/-x</h2>
              </div>

              <ul className="pl-5 list-disc">
                <li>Tussen de 21 en 35 jaar</li>
                <li>
                  Tijd voor optreden (1x per maand) en repeteren (1x per week)
                </li>
                <li>Evenveel ambitie als wij om ervoor te gaan</li>
                <li>Niet bang zijn om los te gaan op het podium</li>
                <li>Schrijft eigen nummers</li>
                <li>Podiumervaring</li>
                <li>Thuis kunnen opnemen is een pré</li>
                <li>Repeteren in Zoetermeer</li>
              </ul>

              <h3 className="mt-6">Je krijgt:</h3>
              <ul className="pl-5 list-disc">
                <li>Een ervaren band met ambitieuze muzikanten</li>
                <li>Vette shows</li>
                <li>Een hoop lol</li>
              </ul>

              <hr className="my-3" />

              <p>
                Stuur een mail naar{' '}
                <a className="inline-block" href="mailto:mail@leftalive.nl">
                  mail@leftalive.nl
                </a>
              </p>
              <p>
                of een bericht op{' '}
                <a href="https://facebook.com/leftaliveband">Facebook</a> or{' '}
                <a href="https://instagram.com/leftaliveband">Instagram</a>
              </p>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default About;
