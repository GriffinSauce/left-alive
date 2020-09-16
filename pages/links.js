import { AiOutlineLink } from 'react-icons/ai';
import { SiSpotify, SiInstagram, SiApplemusic } from 'react-icons/si';
import NextLink from 'next/link';

const Link = ({ href, children, thumbnail }) => {
  return (
    <a className="flex items-center justify-start bg-white rounded" href={href}>
      <div
        className="flex items-center justify-center text-gray-500 bg-gray-100 bg-center bg-cover rounded-tl rounded-bl w-14 h-14"
        style={
          thumbnail
            ? {
                backgroundImage: `url(${thumbnail})`,
              }
            : {}
        }
      >
        {thumbnail ? null : <AiOutlineLink />}
      </div>
      <span className="px-3 font-semibold text-gray-800">{children}</span>
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
            <Link
              href="https://www.youtube.com/watch?v=ypjM2_CkeXs"
              thumbnail="https://img.youtube.com/vi/ypjM2_CkeXs/0.jpg"
            >
              Watch the video for 'Promise'
            </Link>
            <Link href="https://www.epicmerchstore.com/collection/left-alive/">
              Get some swag 👕
            </Link>
            <Link href="https://leftalive.nl">Our website</Link>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3 text-4xl">
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
