import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

const pages = [
  ['/', 'Hjem'],
  ['/about-the-plan', 'Om planen'],
  ['/about-us', 'Bag planen'],
];

const MenuItems = ({ large = false }) => (
  <React.Fragment>
    {pages.map(([href, title]) => (
      <Link
        activeClassName="opacity-100"
        className={`${
          large ? 'hidden md:block' : 'block md:hidden'
        } cursor-pointer m-4 text-white opacity-50 font-bold`}
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
    className="relative cursor-pointer md:hidden ml-2"
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

const Menu = () => {
  const [sideBarActive, setsideBarActive] = useState(false);

  return (
    <div>
      <div className="shadow-md fixed flex z-10 items-center bg-green-800 w-full">
        <BurgerButton setsideBarActive={setsideBarActive} />
        <Link to="/">
          <img src="/logo_white.png" alt="" className="h-10 md:h-12 m-2" />
        </Link>
        <MenuItems large />
        <button
          onClick={() =>
            (() => {
              var doc = document.getElementById('sign');
              if (doc) {
                doc.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#sign');
              }
            })()
          }
          className="m-2 ml-auto bg-green-700 hover:bg-green-600 active:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Skriv under
        </button>
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
      <div className="h-12 md:h-16 w-full"></div>
    </div>
  );
};

export default Menu;
