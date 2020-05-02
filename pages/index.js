import Nav from '../components/Nav';
import Releases from '../components/Releases';
import MerchBanner from '../components/MerchBanner';
import FacebookFeed from '../components/FacebookFeed';
import InstaFeed from '../components/InstaFeed';
import NewsletterForm from '../components/NewsletterForm';
import Youtube from '../components/Youtube';

// Keep this a complete class to tailwind purge doesn't kill it
const COLUMN_V_GAP = 'gap-12';

// Offset anchor up a bit for more human nav
const Anchor = ({ id }) => <div id={id} className="absolute -mt-10" />;

export default function Home() {
  return (
    <div className="bg-gray-300">
      <Nav />

      <div className="bg-white">
        <header role="banner" className="container flex justify-center">
          <a href="/" className="block w-full py-12">
            <img
              alt="Left Alive - pop punk from the heart"
              id="headerimg"
              src="/img/logo.svg"
            />
          </a>
        </header>
      </div>

      <img
        className="object-cover w-full hero-image bg-grey-900"
        src="/img/hero.jpg"
        alt="The band on stage"
      />

      <div className={`container grid ${COLUMN_V_GAP} -mt-10 sm:-mt-40`}>
        <section className="">
          <h2 className="py-2 text-3xl text-center text-white page-title sm:text-5xl">
            WE ARE LEFT ALIVE!
          </h2>

          <div className="grid gap-3 p-6 text-lg bg-white">
            <p>
              Danceable, fast-paced and super energetic: Left Alive play pop
              punk from the heart. The quintet combine catchy riffs like those
              of Neck Deep with the powerful vocals of bands like Paramore. They
              first hit the stage at the end of 2015 and have since blown away
              many a venue and festival with their live performance.
            </p>
            <p>
              <strong>
                <a href="https://www.leftalive.nl/about/">Read more…</a>
              </strong>
            </p>
            <p>
              Want us to play in your town, venue or living room?&nbsp;
              <strong>
                <a
                  href="mailto:mail@leftalive.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let us know
                </a>
              </strong>
              .
            </p>
            <img src="/img/bandpic.jpg" alt="The band" />
          </div>

          <div>[widget area 1]</div>
        </section>

        <section className={`grid ${COLUMN_V_GAP} sm:grid-cols-2 sm:gap-6`}>
          <div>
            <Anchor id="music" />
            <a
              className="button button-spotify"
              href="https://open.spotify.com/artist/128KZvfmYDa6R9uuma8u1A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/icons/icon-spotify-white.png" alt="" />
              <div>Listen on Spotify</div>
            </a>
            <div className="p-3 bg-white releases">
              <Releases />
            </div>
          </div>
          <div className="grid gap-3">
            <Youtube
              title="Promise video"
              src="https://www.youtube.com/embed/ypjM2_CkeXs?rel=0&amp;showinfo=0"
            />
            <Youtube
              title="Leave it video"
              src="https://www.youtube.com/embed/jFz6peaugVo?rel=0&amp;showinfo=0"
            />
            <Youtube
              title="Empty Sidewalks video"
              src="https://www.youtube.com/embed/1NOkjNYO58g?rel=0&amp;showinfo=0"
            />
          </div>
        </section>

        <MerchBanner />

        <section className={`grid ${COLUMN_V_GAP} sm:grid-cols-2 sm:gap-6`}>
          <div>
            <Anchor id="socials" />
            <a
              className="button button-fb"
              href="https://facebook.com/leftaliveband"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/icons/icon-fb-white.png" alt="" />
              <div>Like us on Facebook</div>
            </a>
            <div className="p-3 bg-white">
              Like us to get the latest news on shows and other adventures!
            </div>
            <div className="border-t btn-after facebook-feed border-grey-100">
              <FacebookFeed />
            </div>
          </div>
          <div>
            <a
              className="button button-insta"
              href="https://www.instagram.com/leftaliveband/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/icons/icon-instagram-white.png" alt="" />
              <div>Follow us on instagram</div>
            </a>
            <div className="mt-1">
              <InstaFeed />
            </div>
          </div>
        </section>

        <section
          className="flex flex-col items-center py-12 text-center text-white bg-cover newsletter"
          id="newsletter"
        >
          <div className="grid max-w-xs gap-4">
            <h3 className="text-4xl sm:text-5xl">NO SOCIALS?</h3>
            <p className="text-lg">
              No problem! Sign up for the newsletter to get updates straight
              from us!
            </p>
            <NewsletterForm />
          </div>
        </section>

        <div className="grid gap-3 text-center">
          <h3 className="text-2xl">Contact</h3>
          <p>
            <a href="mailto:mail@leftalive.nl">mail@leftalive.nl</a>
          </p>
          <p>
            or send us a message on{' '}
            <a href="https://facebook.com/leftaliveband">Facebook</a> or{' '}
            <a href="https://instagram.com/leftaliveband">Instagram</a>
          </p>
        </div>
      </div>
      <div>
        <footer
          className="py-12 text-xs italic text-center text-gray-600"
          role="contentinfo"
        >
          <p className="copyright">
            &copy; 2020 Copyright Left Alive.
            <br />
            Built by{' '}
            <a href="https://github.com/GriffinSauce/" title="GriffinSauce">
              GriffinSauce
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
