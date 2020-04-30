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
                alt="POP PUNK FROM THE HEART"
                id="headerimg"
                src="/img/logo.svg"
                alt="Left Alive"
              />
            </a>
          </header>
        </div>
      </div>

      <div className="hero-image"></div>

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
                <img src="/img/bandpic.jpg" />
              </div>

              <div>[widget area 1]</div>
            </section>

            <section className="row with-columns media">
              <div className="offset-anchor" id="music"></div>
              <div className="col-sm-6 column">
                <a
                  className="button button-spotify"
                  href="https://open.spotify.com/artist/128KZvfmYDa6R9uuma8u1A"
                  target="_blank"
                >
                  <img src="/img/icons/icon-spotify-white.png" />
                  <div>Listen on Spotify</div>
                </a>
                <div className="button-attachment releases">
                  <div className="row">
                    <div className="col-xs-6">
                      <a
                        href="https://open.spotify.com/track/1oxMxW9wyF7AgP3QSRHSbX"
                        target="_blank"
                      >
                        <img src="/img/promise-single.jpg" />
                      </a>
                    </div>
                    <div className="col-xs-6">
                      <a
                        href="https://open.spotify.com/track/5wCDNamRAJvFyHWjm9l5y2"
                        target="_blank"
                      >
                        <img src="/img/liars-single.jpg" />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6">
                      <a
                        href="https://open.spotify.com/track/51josIdonJjiuQaTU7ISpV"
                        target="_blank"
                      >
                        <img src="/img/leaveit-comingsoon.jpg" />
                      </a>
                    </div>
                    <div className="col-xs-6">
                      <a
                        href="https://open.spotify.com/album/56uLvj0p9a24aUwFvPUBrQ"
                        target="_blank"
                      >
                        <img src="/img/empty-ep.jpg" />
                      </a>
                    </div>
                  </div>
                  <div className="music-links">
                    <a
                      href="https://music.apple.com/us/album/liars/1461679307?i=1461679308&amp;uo=4&amp;app=music&amp;ls=1&amp;at=1000lHKX"
                      target="_blank"
                      aria-label="Listen to Left Alive on Apple Music"
                    >
                      <svg width="36" height="36" viewBox="0 0 40 40">
                        <path
                          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 4.47165e-06 20 4.47165e-06C8.95431 4.47165e-06 -8.53819e-06 8.9543 -8.53819e-06 20C-8.53819e-06 31.0457 8.95431 40 20 40Z"
                          fill="url(#paint0_linear_apple-music-icon-circle)"
                        ></path>
                        <g opacity="0.192" filter="url(#filter0_f)">
                          <path
                            d="M61.9713 2.26772e-07C45.5355 0.000108324 29.7729 6.52924 18.1511 18.1511C6.52924 29.7729 0.000108324 45.5355 2.26772e-07 61.9713C0.000107682 78.407 6.52924 94.1696 18.1511 105.791C29.7729 117.413 45.5355 123.942 61.9713 123.943C78.407 123.942 94.1696 117.413 105.791 105.791C117.413 94.1696 123.942 78.407 123.943 61.9713C123.942 45.5355 117.413 29.7729 105.791 18.1511C94.1696 6.52924 78.407 0.000107682 61.9713 2.26772e-07V2.26772e-07ZM93.0307 12.2988C94.4959 12.2975 95.572 13.1197 95.9905 14.5618C96.1364 15.0642 96.1721 24.2661 96.1346 51.2079L96.0851 87.1831L95.7071 88.5248C94.4242 93.0876 91.2913 96.3176 86.8536 97.65C83.7175 98.5916 79.1347 98.9411 76.8839 98.4106C74.8804 97.9384 73.4284 97.1012 71.8394 95.5028C69.5281 93.1778 68.5033 90.8026 68.498 87.763C68.4956 86.0628 68.7969 84.7828 69.6024 83.0752C70.7413 80.6608 72.2152 79.2073 74.8689 77.8807C76.9938 76.8185 78.8933 76.2679 84.4429 75.1087C88.0903 74.3468 88.9785 74.02 89.6894 73.1752C90.6669 72.0135 90.6454 72.445 90.5953 54.0366C90.5519 38.0433 90.5342 37.1645 90.2433 36.7205C89.8119 36.0622 88.9128 35.7224 87.9626 35.8583C86.9533 36.0025 51.0662 43.2637 50.1709 43.5047C49.176 43.7726 48.4558 44.5638 48.2244 45.6425C48.088 46.279 48.034 53.3359 48.0331 70.7126C48.0319 97.4009 48.0536 96.7956 46.9866 99.6319C46.6821 100.441 46.1363 101.556 45.7736 102.11C44.857 103.509 43.0949 105.211 41.7248 106.022C38.4476 107.961 32.0395 108.958 28.6169 108.061C24.9907 107.111 22.297 104.643 21.0827 101.159C20.5008 99.4899 20.3639 96.7434 20.7721 94.9087C21.1993 92.9886 22.1877 91.1594 23.5217 89.8193C25.8713 87.4589 28.6485 86.3616 36.1264 84.8386C37.7406 84.5098 39.4056 84.1276 39.8268 83.9894C40.7154 83.6977 41.6791 82.7819 42.1134 81.8161C42.3989 81.1813 42.4203 79.6312 42.4996 52.9689L42.5835 24.7925L42.9756 23.9965C43.4386 23.0563 44.4146 22.171 45.3992 21.7984C46.0355 21.5577 83.3052 13.9608 89.628 12.7831C91.0577 12.5167 92.5889 12.2992 93.0307 12.2988H93.0307Z"
                            transform="translate(3.75378 3.72998) scale(0.264583)"
                            fill="black"
                          ></path>
                        </g>
                        <path
                          d="M69.2409 0C50.8771 0 33.2654 7.29501 20.2802 20.2802C7.29501 33.2654 0 50.8771 0 69.2409C0 87.6048 7.29501 105.216 20.2802 118.202C33.2654 131.187 50.8771 138.482 69.2409 138.482C78.3338 138.482 87.3376 136.691 95.7383 133.211C104.139 129.732 111.772 124.631 118.202 118.202C124.631 111.772 129.732 104.139 133.211 95.7383C136.691 87.3376 138.482 78.3338 138.482 69.2409C138.482 60.1481 136.691 51.1443 133.211 42.7436C129.732 34.3429 124.631 26.7098 118.202 20.2802C111.772 13.8506 104.139 8.75034 95.7383 5.27065C87.3376 1.79097 78.3338 0 69.2409 0V0ZM100.3 19.5685C101.766 19.5672 102.842 20.3894 103.26 21.8315C103.406 22.3339 103.442 31.5358 103.404 58.4776L103.355 94.4528L102.977 95.7945C101.694 100.357 98.5609 103.587 94.1232 104.92C90.9872 105.861 86.4043 106.211 84.1535 105.68C82.1501 105.208 80.698 104.371 79.1091 102.772C76.7978 100.447 75.773 98.0723 75.7677 95.0327C75.7654 93.3325 76.0666 92.0525 76.872 90.3449C78.0109 87.9305 79.4849 86.4769 82.1386 85.1504C84.2635 84.0882 86.163 83.5375 91.7126 82.3783C95.36 81.6165 96.2482 81.2897 96.9591 80.4449C97.9366 79.2832 97.9151 79.7147 97.865 61.3063C97.8215 45.313 97.8039 44.4342 97.513 43.9902C97.0816 43.3319 96.1825 42.9921 95.2323 43.128C94.2229 43.2722 58.3358 50.5333 57.4406 50.7744C56.4456 51.0423 55.7254 51.8335 55.4941 52.9122C55.3576 53.5487 55.3037 60.6056 55.3028 77.9823C55.3016 104.671 55.3233 104.065 54.2563 106.902C53.9518 107.711 53.406 108.826 53.0433 109.38C52.1266 110.778 50.3646 112.481 48.9945 113.291C45.7172 115.23 39.3092 116.228 35.8866 115.331C32.2603 114.381 29.5667 111.912 28.3524 108.429C27.7705 106.76 27.6336 104.013 28.0417 102.178C28.4689 100.258 29.4574 98.4291 30.7913 97.089C33.1409 94.7285 35.9181 93.6313 43.3961 92.1083C45.0103 91.7795 46.6753 91.3973 47.0965 91.2591C47.985 90.9674 48.9488 90.0516 49.3831 89.0858C49.6685 88.451 49.6899 86.9009 49.7693 60.2386L49.8531 32.0622L50.2453 31.2661C50.7083 30.326 51.6843 29.4407 52.6689 29.0681C53.3051 28.8274 90.5748 21.2305 96.8976 20.0528C98.3274 19.7864 99.8585 19.5689 100.3 19.5685Z"
                          transform="translate(1.67999 1.68018) scale(0.264583)"
                          fill="white"
                        ></path>
                        <defs>
                          <filter
                            id="filter0_f"
                            x="1.70421"
                            y="1.68041"
                            width="36.8923"
                            height="36.8923"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feGaussianBlur
                              stdDeviation="1.02479"
                              result="effect1_foregroundBlur"
                            ></feGaussianBlur>
                          </filter>
                          <linearGradient
                            id="paint0_linear_apple-music-icon-circle"
                            x2="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(24.8821 -7.03194) scale(37.2822) rotate(52.3873)"
                          >
                            <stop stopColor="#FF5E50"></stop>
                            <stop offset="0.249038" stopColor="#FE5C6C"></stop>
                            <stop offset="0.376518" stopColor="#E3658A"></stop>
                            <stop offset="0.496954" stopColor="#B87EB0"></stop>
                            <stop offset="0.626674" stopColor="#916CFF"></stop>
                            <stop
                              offset="0.762798"
                              stopColor="#70BCFB"
                              stopOpacity="0.919192"
                            ></stop>
                            <stop offset="1" stopColor="#21C7FE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <div>Apple Music</div>
                    </a>
                    <a
                      href="https://open.spotify.com/artist/128KZvfmYDa6R9uuma8u1A?si=t-KS0MCPQWWqpD7IZS8-zQ"
                      target="_blank"
                      aria-label="Listen to Left Alive on Spotify"
                    >
                      <svg width="36" height="36" viewBox="0 0 45 45">
                        <path
                          style={{ fill: '#1dd069' }}
                          d="M45.71,23.22a22.5,22.5,0,1,0-6.59,15.91,22.5,22.5,0,0,0,6.59-15.91Z"
                          transform="translate(-0.71 -0.73)"
                        ></path>
                        <path
                          style={{ fill: '#fff' }}
                          d="M38.46,16.7a25.43,25.43,0,0,0-2.34-1.21q-1.18-.53-2.44-1A37.88,37.88,0,0,0,27.5,13a46.8,46.8,0,0,0-6.33-.59q-1.3,0-2.6,0t-2.6.16c-.83.08-1.64.17-2.43.29s-1.61.27-2.41.46l-1,.24c-.32.09-.66.18-1,.28A2.44,2.44,0,0,0,8,14.74a2.53,2.53,0,0,0,1.37,3.86,2.46,2.46,0,0,0,.72.1,2.84,2.84,0,0,0,.71-.1l.23-.06c.56-.15,1.11-.3,1.67-.42.86-.19,1.73-.33,2.6-.43s1.77-.18,2.65-.22,1.55-.06,2.32-.05,1.54,0,2.32.08,1.49.11,2.23.2,1.46.19,2.19.32c1.06.19,2.1.41,3.12.69a27.65,27.65,0,0,1,3,1q.75.3,1.46.65c.47.23.94.48,1.42.75a2.58,2.58,0,0,0,1.27.34,2.51,2.51,0,0,0,2.19-1.27,2.57,2.57,0,0,0,.33-1.26v-.06s0-.07,0-.13a3,3,0,0,0-.05-.36,2.45,2.45,0,0,0-.45-1,2.73,2.73,0,0,0-.8-.69Z"
                          transform="translate(-0.71 -0.73)"
                        ></path>
                        <path
                          style={{ fill: '#fff' }}
                          d="M29.87,21.55a33.53,33.53,0,0,0-5.77-1.3A34.39,34.39,0,0,0,18.19,20c-.94,0-1.86.11-2.77.22s-1.82.27-2.74.47l-1.11.27-1.08.31A2.08,2.08,0,0,0,9.43,22,2.22,2.22,0,0,0,9,23.23a2.15,2.15,0,0,0,.35,1.25,2.18,2.18,0,0,0,1,.83,2.15,2.15,0,0,0,.78.16,2.51,2.51,0,0,0,.75-.11,24.79,24.79,0,0,1,3.61-.78,28.69,28.69,0,0,1,3.87-.27c1,0,2,0,2.91.14s1.87.22,2.81.4a28.37,28.37,0,0,1,3.54.9A23.34,23.34,0,0,1,32,27.12c.35.18.69.37,1,.57l.38.21a2.25,2.25,0,0,0,1.64.24,2.15,2.15,0,0,0,1.33-1,2.23,2.23,0,0,0,.25-1.67,2.14,2.14,0,0,0-1-1.33h0L35.38,24a25.6,25.6,0,0,0-2.69-1.39,27.9,27.9,0,0,0-2.82-1.07Z"
                          transform="translate(-0.71 -0.73)"
                        ></path>
                        <path
                          style={{ fill: '#fff' }}
                          d="M24.13,27.42a30.78,30.78,0,0,0-4.36-.34h0l-.91,0c-.69,0-1.39.07-2,.12-.88.07-1.76.19-2.64.33s-1.75.31-2.61.51l-.22.06h0l-.25.08a1.79,1.79,0,0,0-.92.82A1.88,1.88,0,0,0,10,30.27a1.79,1.79,0,0,0,1.78,1.47l.4,0,.35-.07q1.55-.34,3.12-.56c1-.14,2.09-.23,3.15-.28q1.22,0,2.44,0t2.42.25a21.3,21.3,0,0,1,3.8.93A19.6,19.6,0,0,1,31,33.66h0l.06,0,.36.2a1.84,1.84,0,0,0,1.85-3.14,3.57,3.57,0,0,0-.36-.24l0,0h0a22.77,22.77,0,0,0-2.16-1.14,23.32,23.32,0,0,0-2.27-.9,25.39,25.39,0,0,0-4.26-1Z"
                          transform="translate(-0.71 -0.73)"
                        ></path>
                      </svg>
                      <div>Spotify</div>
                    </a>
                    <a
                      href="https://www.youtube.com/leftalive"
                      target="_blank"
                      aria-label="Listen to Left Alive - Left Alive on YouTube"
                    >
                      <svg width="36" height="36" viewBox="0 0 45 45">
                        <defs>
                          <style>
                            {`
													.youtube-icon-circle-1 {
														fill: red;
													}

													.youtube-icon-circle-2 {
														fill: #fff;
													}
                          `}
                          </style>
                        </defs>
                        <circle
                          className="youtube-icon-circle-1"
                          cx="22.5"
                          cy="22.5"
                          r="22.5"
                        ></circle>
                        <path
                          id="lozenge-path"
                          className="youtube-icon-circle-2"
                          d="M37.12,16a3.71,3.71,0,0,0-2.61-2.61C32.2,12.73,23,12.73,23,12.73s-9.24,0-11.55.62A3.71,3.71,0,0,0,8.79,16a38.56,38.56,0,0,0-.62,7.11,38.56,38.56,0,0,0,.62,7.11,3.71,3.71,0,0,0,2.61,2.61c2.31.62,11.55.62,11.55.62s9.24,0,11.55-.62a3.71,3.71,0,0,0,2.61-2.61,38.56,38.56,0,0,0,.62-7.11A38.56,38.56,0,0,0,37.12,16Z"
                          transform="translate(0 -0.58)"
                        ></path>
                        <polygon
                          id="play-polygon"
                          className="youtube-icon-circle-1"
                          points="20 26.93 27.68 22.5 20 18.07 20 26.93"
                        ></polygon>
                      </svg>
                      <div>YouTube</div>
                    </a>
                    <a
                      href="https://soundcloud.com/leftalive/"
                      target="_blank"
                      aria-label="Listen to Left Alive on SoundCloud"
                    >
                      <svg width="36" height="36" viewBox="0 0 45 45">
                        <defs>
                          <style>
                            {`
													.soundcloud-icon-circle-1 {
														fill: #f70;
													}

													.soundcloud-icon-circle-2 {
														fill: #fff;
													}
                          `}
                          </style>
                        </defs>
                        <title>sound cloud circle icon</title>
                        <path
                          className="soundcloud-icon-circle-1"
                          d="M144.24,22.5a22.5,22.5,0,1,0-6.59,15.91A22.5,22.5,0,0,0,144.24,22.5Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M101.56,21.72a.17.17,0,0,0-.16.16l-.3,2.26.3,2.22a.17.17,0,0,0,.16.16.17.17,0,0,0,.16-.16h0l.35-2.22-.35-2.26a.17.17,0,0,0-.16-.16Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M103.23,20.49a.17.17,0,0,0-.34,0l-.4,3.65.4,3.57a.17.17,0,0,0,.34,0l.45-3.57-.45-3.65Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M109.53,17.12a.31.31,0,0,0-.31.3l-.32,6.72.32,4.34a.31.31,0,0,0,.62,0h0l.36-4.34-.36-6.72A.32.32,0,0,0,109.53,17.12Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M106.27,19.45a.24.24,0,0,0-.24.23l-.36,4.45.36,4.31a.24.24,0,0,0,.48,0l.41-4.31-.41-4.45A.25.25,0,0,0,106.27,19.45Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M112.84,28.78a.38.38,0,0,0,.38-.37l.31-4.27-.31-8.94a.38.38,0,0,0-.75,0l-.28,8.94.28,4.27A.38.38,0,0,0,112.84,28.78Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M119.62,28.8a.52.52,0,0,0,.52-.51h0l.22-4.15-.22-10.33a.52.52,0,0,0-1,0l-.19,10.32.19,4.15A.52.52,0,0,0,119.62,28.8Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M116.2,28.79a.45.45,0,0,0,.45-.44h0l.26-4.2-.27-9a.45.45,0,0,0-.89,0l-.24,9,.24,4.2a.45.45,0,0,0,.45.44Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M107.89,28.75a.28.28,0,0,0,.27-.27l.38-4.34L108.16,20a.27.27,0,0,0-.55,0l-.34,4.13.34,4.34A.28.28,0,0,0,107.89,28.75Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M104.66,28.51a.21.21,0,0,0,.2-.2l.43-4.17-.43-4.33a.21.21,0,0,0-.2-.2.21.21,0,0,0-.2.2l-.38,4.33.38,4.17a.21.21,0,0,0,.2.2Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M117.91,15a.48.48,0,0,0-.48.48l-.22,8.68.22,4.18a.48.48,0,0,0,1,0h0l.24-4.18-.24-8.68a.48.48,0,0,0-.48-.48Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M111.18,28.79a.35.35,0,0,0,.34-.34l.34-4.31-.34-8.25a.34.34,0,0,0-.69,0l-.3,8.25.3,4.31A.35.35,0,0,0,111.18,28.79Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M114.93,28.39h0l.29-4.24-.29-9.24a.41.41,0,0,0-.82,0l-.26,9.24.26,4.24a.41.41,0,0,0,.82,0h0Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M136.75,18.81a5,5,0,0,0-1.93.39,8.82,8.82,0,0,0-8.79-8,8.94,8.94,0,0,0-3.2.6c-.38.15-.48.3-.48.59V28.22a.61.61,0,0,0,.54.59h13.86a5,5,0,0,0,0-10Z"
                          transform="translate(-99.24 0)"
                        ></path>
                        <path
                          className="soundcloud-icon-circle-2"
                          d="M121.33,12.33a.56.56,0,0,0-.55.55l-.23,11.26.23,4.09a.55.55,0,0,0,1.1,0h0l.25-4.09-.25-11.26a.56.56,0,0,0-.55-.55Z"
                          transform="translate(-99.24 0)"
                        ></path>
                      </svg>
                      <div>Soundcloud</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 column">
                <div className="video-responsive">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ypjM2_CkeXs?rel=0&amp;showinfo=0"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-responsive">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/jFz6peaugVo?rel=0&amp;showinfo=0"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-responsive">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/1NOkjNYO58g?rel=0&amp;showinfo=0"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </section>

            <a
              href="https://www.epicmerchstore.com/collection/artists/left-alive/"
              target="_blank"
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
              <div className="offset-anchor" id="socials"></div>
              <div className="col-sm-6 column">
                <a
                  className="button button-fb"
                  href="https://facebook.com/leftaliveband"
                  target="_blank"
                >
                  <img src="/img/icons/icon-fb-white.png" />
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
                >
                  <img src="/img/icons/icon-instagram-white.png" />
                  <div>Follow us on instagram</div>
                </a>
                <div className="instagram-feed">
                  {/* <!-- Edit settings: https://lightwidget.com/edit-widget/4fab75b606525d2794cc290613ccfa9e (log in w. leftaliveband insta) --> */}
                  <script src="//lightwidget.com/widgets/lightwidget.js"></script>
                  <iframe
                    src="//lightwidget.com/widgets/4fab75b606525d2794cc290613ccfa9e.html"
                    scrolling="no"
                    allowtransparency="true"
                    className="lightwidget-widget"
                    style={{
                      width: '100%',
                      border: 0,
                      overflow: 'hidden',
                    }}
                  ></iframe>
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
              [widget-area-2]
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

          <div className="clearfix"></div>
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

      <style jsx global>{``}</style>
    </>
  );
}
