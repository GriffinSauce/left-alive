import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Left Alive</title>
        <link rel="icon" href="/favicon.ico" />

        <link href="//www.google-analytics.com" rel="dns-prefetch" />
        <link href="/img/icons/favicon.ico" rel="shortcut icon" />
        <link href="/img/icons/touch.png" rel="apple-touch-icon-precomposed" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#00869d" />

        <meta
          property="og:title"
          content="Left Alive - Pop punk from the heart"
        />
        <meta property="og:url" content="http://www.leftalive.nl/" />
        <meta
          property="og:image"
          content="http://www.leftalive.nl/wp-content/themes/LeftAliveWPTheme/img/leftalive.jpg"
        />
        <meta
          property="og:description"
          content="Danceable, fast-paced and super energetic: Left Alive play pop punk from the heart!"
        />
        <meta property="og:site_name" content="Left Alive" />

        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700,400italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="https://use.typekit.net/fue2pbb.css" />
      </Head>

      <div className="navigation-wrapper">
        <div className="container">
          <nav className="col-xs-12 col-sm-10 col-sm-push-1">
            <ul className="navigation">
              <li>
                <a href="#music">Music</a>
              </li>
              <li>
                <a href="#socials">Social</a>
              </li>
              <li>
                <a href="/events">Shows</a>
              </li>
              <li>
                <a
                  href="https://www.epicmerchstore.com/collection/left-alive/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Merch
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="header-wrapper">
        <div className="container">
          <header className="header col-xs-12" role="banner">
            <a href="/">
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
                  <div className="row">
                    <div className="col-xs-6">
                      <a
                        href="https://open.spotify.com/track/1oxMxW9wyF7AgP3QSRHSbX"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/img/release-promise.jpg"
                          alt="Promise single"
                        />
                      </a>
                    </div>
                    <div className="col-xs-6">
                      <a
                        href="https://open.spotify.com/track/5wCDNamRAJvFyHWjm9l5y2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="/img/release-liars.jpg" alt="Liars single" />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6">
                      <a
                        href="https://open.spotify.com/track/51josIdonJjiuQaTU7ISpV"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/img/release-leaveit.jpg"
                          alt="Leave it single"
                        />
                      </a>
                    </div>
                    <div className="col-xs-6">
                      <a
                        href="https://open.spotify.com/album/56uLvj0p9a24aUwFvPUBrQ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/img/release-empty.jpg"
                          alt="Empty Sidewalks EP"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="music-links">
                    <a
                      href="https://music.apple.com/us/album/liars/1461679307?i=1461679308&amp;uo=4&amp;app=music&amp;ls=1&amp;at=1000lHKX"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Listen to Left Alive on Apple Music"
                    >
                      <img src="/img/icons/icon-apple-music.svg" alt="" />
                      <div>Apple Music</div>
                    </a>
                    <a
                      href="https://open.spotify.com/artist/128KZvfmYDa6R9uuma8u1A?si=t-KS0MCPQWWqpD7IZS8-zQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Listen to Left Alive on Spotify"
                    >
                      <img src="/img/icons/icon-spotify.svg" alt="" />
                      <div>Spotify</div>
                    </a>
                    <a
                      href="https://www.youtube.com/leftalive"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Listen to Left Alive - Left Alive on YouTube"
                    >
                      <img src="/img/icons/icon-youtube.svg" alt="" />
                      <div>YouTube</div>
                    </a>
                    <a
                      href="https://soundcloud.com/leftalive/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Listen to Left Alive on SoundCloud"
                    >
                      <img src="/img/icons/icon-soundcloud.svg" alt="" />
                      <div>Soundcloud</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 column">
                <div className="video-responsive">
                  <iframe
                    title="Promise video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ypjM2_CkeXs?rel=0&amp;showinfo=0"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <div className="video-responsive">
                  <iframe
                    title="Leave it video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/jFz6peaugVo?rel=0&amp;showinfo=0"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <div className="video-responsive">
                  <iframe
                    title="Empty Sidewalks video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/1NOkjNYO58g?rel=0&amp;showinfo=0"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>

            <a
              href="https://www.epicmerchstore.com/collection/artists/left-alive/"
              target="_blank"
              rel="noopener noreferrer"
              className="merch"
              id="merch"
            >
              <div className="row">
                <div className="col-12">
                  <h2>MERCH</h2>
                  <p>Get some at Epic Merch Store!</p>
                </div>
              </div>
              <div className="row">
                <div className="column-left col-sm-6">
                  <img
                    className="beanies"
                    alt="beanies merch"
                    src="/img/merch-beanies.png"
                    srcSet="/img/merch-beanies.png, /img/merch-beanies@2x.png 2x"
                  />
                </div>
                <div className="column-right col-sm-6">
                  <img
                    className="shirts"
                    alt="shirts"
                    src="/img/merch-shirts.png"
                    srcSet="/img/merch-shirts.png, /img/merch-shirts@2x.png 2x"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="button button-merch">See more</div>
                </div>
              </div>
            </a>

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
                <div className="btn-after facebook-feed">[widget-area-3]</div>
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
                <div className="instagram-feed">
                  {/* <!-- Edit settings: https://lightwidget.com/edit-widget/4fab75b606525d2794cc290613ccfa9e (log in w. leftaliveband insta) --> */}
                  <script src="//lightwidget.com/widgets/lightwidget.js" />
                  <iframe
                    title="Insta feed"
                    src="//lightwidget.com/widgets/4fab75b606525d2794cc290613ccfa9e.html"
                    scrolling="no"
                    allowtransparency="true"
                    className="lightwidget-widget"
                    style={{
                      width: '100%',
                      border: 0,
                      overflow: 'hidden',
                    }}
                  />
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
              <form method="post">
                <div className="form-fields">
                  <p>
                    <input
                      type="text"
                      name="FNAME"
                      placeholder="your name"
                      required=""
                    />
                  </p>
                  <p>
                    <input
                      type="email"
                      name="EMAIL"
                      placeholder="email"
                      required=""
                    />
                  </p>
                  <p>
                    <input type="submit" value="Sign me up!" />
                  </p>
                </div>
                <label style={{ display: 'none' }} htmlFor="newsletter_hp">
                  {`Leave this field empty if you're human: `}
                  <input
                    type="text"
                    name="newsletter_hp"
                    value=""
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </label>
              </form>
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

          <div className="clearfix" />
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

      {/* <!-- analytics -->
		<script>
		(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');
		</script> */}
    </>
  );
}
