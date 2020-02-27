import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { ModalContext } from './Form/Modal';
import Button from './Button';

const pages = [
  ['/', 'Hjem'],
  ['/supporters', 'Støtter'],
  ['/about-the-plan', 'Om planen'],
  ['/about-us', 'Bag planen'],
];

const Menu = ({ transparent = false }) => {
  const [isSticky, setSticky] = useState(false);

  const openModal = useContext(ModalContext);

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
        <Link to="/">
          <img
            src="/logo_white.png"
            alt=""
            className="h-12 md:h-12 m-4 md:mx-8"
          />
        </Link>
        {pages.map(([href, title]) => (
          <Link
            className="cursor-pointer m-6 text-sand-100 font-bold hidden md:block"
            to={href}
            key={href}
          >
            {title}
          </Link>
        ))}
        <Button secondary className="mr-4 md:mr-8 ml-auto" onClick={openModal}>
          Skriv under 🌱
        </Button>
      </div>
      {/* filler */}
      {!transparent && <div className="h-20 w-full"></div>}
    </div>
  );
};

export default Menu;
