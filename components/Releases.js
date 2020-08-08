const Img = ({ src, alt }) => (
  <picture>
    <source srcSet={`${src}.webp"`} type="image/webp" />
    <source srcSet={`${src}.jpg"`} type="image/jpeg" />
    <img src={`${src}.jpg"`} alt={alt} loading="lazy" />
  </picture>
);

const Releases = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 releases">
        <a
          href="https://open.spotify.com/track/1oxMxW9wyF7AgP3QSRHSbX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src="/img/release-promise" alt="Promise single" />
        </a>
        <a
          href="https://open.spotify.com/track/5wCDNamRAJvFyHWjm9l5y2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src="/img/release-liars" alt="Liars single" />
        </a>
        <a
          href="https://open.spotify.com/track/51josIdonJjiuQaTU7ISpV"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src="/img/release-leaveit" alt="Leave it single" />
        </a>
        <a
          className="border border-gray-300"
          href="https://open.spotify.com/album/56uLvj0p9a24aUwFvPUBrQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src="/img/release-empty" alt="Empty Sidewalks EP" />
        </a>
      </div>
      <div className="grid grid-cols-4 mt-8 mb-2 music-links">
        <a
          className="text-xs text-center"
          href="https://music.apple.com/us/album/liars/1461679307?i=1461679308&amp;uo=4&amp;app=music&amp;ls=1&amp;at=1000lHKX"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen to Left Alive on Apple Music"
        >
          <img
            className="inline-block w-10 h-10 mb-2"
            src="/img/icons/icon-apple-music.svg"
            alt=""
          />
          <div>Apple Music</div>
        </a>
        <a
          className="text-xs text-center"
          href="https://open.spotify.com/artist/128KZvfmYDa6R9uuma8u1A?si=t-KS0MCPQWWqpD7IZS8-zQ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen to Left Alive on Spotify"
        >
          <img
            className="inline-block w-10 h-10 mb-2"
            src="/img/icons/icon-spotify.svg"
            alt=""
          />
          <div>Spotify</div>
        </a>
        <a
          className="text-xs text-center"
          href="https://www.youtube.com/leftalive"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen to Left Alive - Left Alive on YouTube"
        >
          <img
            className="inline-block w-10 h-10 mb-2"
            src="/img/icons/icon-youtube.svg"
            alt=""
          />
          <div>YouTube</div>
        </a>
        <a
          className="text-xs text-center"
          href="https://soundcloud.com/leftalive/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen to Left Alive on SoundCloud"
        >
          <img
            className="inline-block w-10 h-10 mb-2"
            src="/img/icons/icon-soundcloud.svg"
            alt=""
          />
          <div>Soundcloud</div>
        </a>
      </div>
    </>
  );
};

export default Releases;
