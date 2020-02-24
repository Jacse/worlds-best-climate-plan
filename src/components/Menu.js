import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import Button from './Button';

const pages = [
  ['/', 'Hjem'],
  ['/about-the-plan', 'Om planen'],
  ['/about-us', 'Bag planen'],
];

const MenuItems = ({ large = false }) => (
  <React.Fragment>
    {pages.map(([href, title]) => (
      <Link
        className={classNames(
          'cursor-pointer m-6 text-sand-100 font-bold',
          large ? 'hidden md:block' : 'block md:hidden'
        )}
        to={href}
        key={href}
      >
        {title}
      </Link>
    ))}
  </React.Fragment>
);

const BurgerButton = ({ setsideBarActive }) => (
  <div
    className="relative cursor-pointer md:hidden ml-8"
    style={{
      width: 26,
      height: 22,
    }}
    onClick={() => setsideBarActive(true)}
  >
    <span>
      <span
        className="absolute inset-x-0 bg-white"
        style={{ height: '20%', top: 0 }}
      ></span>
      <span
        className="absolute inset-x-0 bg-white"
        style={{ height: '20%', top: '40%' }}
      ></span>
      <span
        className="absolute inset-x-0 bg-white"
        style={{ height: '20%', top: '80%' }}
      ></span>
    </span>
  </div>
);

const CloseButton = ({ setsideBarActive }) => (
  <div
    className="absolute p-4 top-0 right-0"
    style={{
      top: '1rem',
      right: '1rem',
      width: 26,
      height: 26,
    }}
    onClick={() => setsideBarActive(false)}
  >
    <span
      className="absolute bg-white cursor-pointer"
      style={{
        width: 3,
        height: 26,
        transformOrigin: 'center',
        transform: 'rotate(45deg)',
      }}
    ></span>
    <span
      className="absolute bg-white cursor-pointer"
      style={{
        width: 3,
        height: 26,
        transformOrigin: 'center',
        transform: 'rotate(-45deg)',
      }}
    ></span>
  </div>
);

const Menu = ({ transparent = false }) => {
  const [sideBarActive, setsideBarActive] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={classNames(
          'fixed w-full z-10 flex items-center transition-colors duration-300',
          {
            'bg-green-800': !transparent || isSticky,
          }
        )}
      >
        <BurgerButton setsideBarActive={setsideBarActive} />
        <Link to="/">
          <img
            src="/logo_white.png"
            alt=""
            className="h-12 md:h-12 my-2 mx-8"
          />
        </Link>
        <MenuItems large />
        <Button secondary className="mr-8 ml-auto">
          Skriv under 🌱
        </Button>
      </div>
      <div
        className="fixed inset-0 bg-green-800 z-20 p-4 text-center"
        style={{
          transform: `translate3d(${sideBarActive ? 0 : '-100%'}, 0, 0)`,
          transition: 'transform 0.2s ease-in-out',
        }}
      >
        <CloseButton setsideBarActive={setsideBarActive} />
        <MenuItems />
      </div>
      {/* filler */}
      {!transparent && <div className="h-16 md:h-20 w-full"></div>}
    </div>
  );
};

export default Menu;
