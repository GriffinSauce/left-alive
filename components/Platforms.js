const Platforms = () => {
  return (
    <>
      <div className="grid grid-cols-4">
        <a
          className="text-xs text-center"
          href="https://music.apple.com/us/artist/left-alive/1073464999"
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

export default Platforms;
