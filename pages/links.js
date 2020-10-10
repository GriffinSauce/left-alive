import { AiOutlineLink } from 'react-icons/ai';
import { SiSpotify, SiInstagram, SiApplemusic } from 'react-icons/si';
import NextLink from 'next/link';
import { getLinks } from '../services/db';

const Link = ({ href, children, thumbnail }) => {
  return (
    <a
      className="flex items-center justify-start bg-white rounded"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={children}
    >
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

const Links = ({ links }) => {
  return (
    <div className="w-full min-h-screen py-6 bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500">
      <div className="grid gap-6">
        <header className="text-center">
          <NextLink href="/" as="/">
            <a className="inline-block w-3/4 text-white">
              <img alt="Left Alive" src="/img/logo-white.svg" />
            </a>
          </NextLink>
        </header>

        <div className="flex flex-col items-center justify-center px-3">
          <div className="grid w-full max-w-sm gap-4">
            {links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                thumbnail={link.thumbnail?.thumbnails?.large?.url}
              >
                {link.title}
              </Link>
            ))}
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

export async function getStaticProps() {
  const linksData = await getLinks();
  return {
    props: {
      links: linksData.map((link) => ({
        ...link,
        thumbnail: link.thumbnail?.[0] || null, // Unwrap first attachment
      })),
    },
  };
}

export default Links;
