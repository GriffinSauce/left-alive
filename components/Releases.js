const Releases = () => {
  return (
    <>
      <div className="row">
        <div className="col-xs-6">
          <a
            href="https://open.spotify.com/track/1oxMxW9wyF7AgP3QSRHSbX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/release-promise.jpg" alt="Promise single" />
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
            <img src="/img/release-leaveit.jpg" alt="Leave it single" />
          </a>
        </div>
        <div className="col-xs-6">
          <a
            href="https://open.spotify.com/album/56uLvj0p9a24aUwFvPUBrQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/release-empty.jpg" alt="Empty Sidewalks EP" />
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
    </>
  );
};

export default Releases;
