import Link from 'next/link';

const NavLink = ({ children, href, target, rel }) => {
  const className =
    'block p-2 text-sm text-gray-700 border-b-2 border-white sm:p-3 sm:text-base hover:font-semibold hover:text-secondary-600 hover:border-secondary-600';
  if (href.startsWith('http'))
    return (
      <li>
        <a href={href} target={target} rel={rel} className={className}>
          {children}
        </a>
      </li>
    );

  return (
    <li>
      <Link href={href} target={target} rel={rel}>
        <a className={className}>{children}</a>
      </Link>
    </li>
  );
};

const Nav = () => {
  return (
    <>
      <div className="bg-white border-b border-gray-200">
        <nav className="container">
          <ul className="flex justify-between max-w-full m-auto text-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/#music">Music</NavLink>
            <NavLink href="/#socials">Social</NavLink>
            <NavLink href="/shows">Shows</NavLink>
            <NavLink
              href="https://www.epicmerchstore.com/collection/left-alive/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Merch
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
