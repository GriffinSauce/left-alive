import Nav from '../components/Nav';
import Releases from '../components/Releases';
import MerchBanner from '../components/MerchBanner';
import FacebookFeed from '../components/FacebookFeed';
import InstaFeed from '../components/InstaFeed';
import NewsletterForm from '../components/NewsletterForm';
import Youtube from '../components/Youtube';

export default function Home() {
  return (
    <>
      <Nav />

      <div className="header-wrapper">
        <div className="container">
          <header className="header col-xs-12" role="banner">
            <a href="/" className="inline-block">
              <img
                alt="Left Alive - pop punk from the heart"
                id="headerimg"
                src="/img/logo.svg"
              />
            </a>
          </header>
        </div>
      </div>

      <div className="hero-image" />

      <div className="container content-container">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-push-1">
            <section className="white-box">
              <div className="main">
                <h2 className="page-title">WE ARE LEFT ALIVE!</h2>
                <p>
                  Danceable, fast-paced and super energetic: Left Alive play pop
                  punk from the heart. The quintet combine catchy riffs like
                  those of Neck Deep with the powerful vocals of bands like
                  Paramore. They first hit the stage at the end of 2015 and have
                  since blown away many a venue and festival with their live
                  performance.
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

            <section className="row with-columns media">
              <div className="offset-anchor" id="music" />
              <div className="col-sm-6 column">
                <a
                  className="button button-spotify"
                  href="https://open.spotify.com/artist/128KZvfmYDa6R9uuma8u1A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/img/icons/icon-spotify-white.png" alt="" />
                  <div>Listen on Spotify</div>
                </a>
                <div className="button-attachment releases">
                  <Releases />
                </div>
              </div>
              <div className="col-sm-6 column grid gap-3">
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

            <section className="mb-10">
              <MerchBanner />
            </section>

            <section className="row with-columns socials">
              <div className="offset-anchor" id="socials" />
              <div className="col-sm-6 column">
                <a
                  className="button button-fb"
                  href="https://facebook.com/leftaliveband"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/img/icons/icon-fb-white.png" alt="" />
                  <div>Like us on Facebook</div>
                </a>
                <div className="button-attachment">
                  Like us to get the latest news on shows and other adventures!
                </div>
                <div className="border-t btn-after facebook-feed border-grey-100">
                  <FacebookFeed />
                </div>
              </div>
              <div className="col-sm-6 column">
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

            <section className="newsletter" id="newsletter">
              <div className="copy">
                <h3>NO FB?</h3>
                <p>
                  No problem! Sign up for the newsletter to get updates straight
                  from us!
                </p>
              </div>
              <NewsletterForm />
            </section>

            <div className="contact">
              <h3>Contact</h3>
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
        </div>
      </div>
      <div>
        <footer className="footer" role="contentinfo">
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
    </>
  );
}
