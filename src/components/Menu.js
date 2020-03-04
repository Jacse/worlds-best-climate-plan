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
  const [backers, setBackers] = useState(null);

  const openModal = useContext(ModalContext);

  const handleScroll = () => {
    setSticky(window.scrollY > 50);
  };

  useEffect(() => {
    // Fetch backers
    const fetchData = async () => {
      const res = await fetch(
        'https://us-central1-boxwood-academy-251913.cloudfunctions.net/scrapeSignatures'
      );
      const json = await res.json();
      setBackers(
        `${new Intl.NumberFormat('da-DK').format(
          json.backers
        )} danskere har skrevet under`
      );
    };
    fetchData();

    // Scrolling - activate menu background
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={classNames(
          'fixed w-full z-30 flex items-center transition-colors duration-300',
          {
            'bg-green-700': !transparent || isSticky,
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
            activeClassName={href !== '/' ? 'menu-item-active' : null}
            className="menu-item cursor-pointer m-6 text-sand-200 font-bold hidden md:block"
            to={href}
            key={href}
          >
            {title}
          </Link>
        ))}
        <p className="text-sand-100 mx-4 ml-auto hidden xl:block">{backers}</p>
        <Button
          secondary
          className="mr-4 md:mr-8 ml-auto xl:ml-0"
          onClick={openModal}
        >
          Skriv&nbsp;under&nbsp;🌱
        </Button>
      </div>
      {/* filler */}
      {!transparent && <div className="h-20 w-full"></div>}
    </div>
  );
};

export default Menu;
