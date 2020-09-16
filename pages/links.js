import { AiOutlineLink } from 'react-icons/ai';
import { SiSpotify, SiInstagram, SiApplemusic } from 'react-icons/si';
import NextLink from 'next/link';

const Link = ({ href, children }) => {
  return (
    <a
      className="flex items-center justify-start p-2 text-gray-800 bg-white rounded"
      href={href}
    >
      <div className="p-3 mr-2 text-gray-500 bg-gray-100 rounded">
        <AiOutlineLink />
      </div>
      <span>{children}</span>
    </a>
  );
};

const Links = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500">
      <div className="grid gap-6">
        <header className="pt-6 text-center">
          <NextLink href="/" as="/">
            <a className="inline-block w-3/4 text-white">
              <img alt="Left Alive" src="/img/logo-white.svg" />
            </a>
          </NextLink>
        </header>

        <div className="flex flex-col items-center justify-center px-3">
          <div className="grid w-full max-w-sm gap-4">
            <Link href="https://open.spotify.com/album/10jhsN6ekL25vaBvtZO0ja?si=4gNysK4vTAS4D61l6QWPJA">
              Listen to 'Staying Safe: A Postcard to Punk'
            </Link>
            <Link href="https://www.youtube.com/watch?v=ypjM2_CkeXs">
              Watch the video for 'Promise'
            </Link>
            <Link href="https://www.epicmerchstore.com/collection/left-alive/">
              Get some swag 👕
            </Link>
            <Link href="https://leftalive.nl">Our website</Link>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3 text-3xl">
          <a
            className="p-1"
            href="https://instagram.com/leftaliveband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <SiInstagram className="text-white" />
          </a>
          <a
            className="p-1"
            href="https://open.spotify.com/artist/128KZvfmYDa6R9uuma8u1A?si=t-KS0MCPQWWqpD7IZS8-zQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Spotify"
          >
            <SiSpotify className="text-white" />
          </a>
          <a
            className="p-1"
            href="https://music.apple.com/us/artist/left-alive/1073464999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Apple Music"
          >
            <SiApplemusic className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
