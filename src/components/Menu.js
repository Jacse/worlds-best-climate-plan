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

  // Fetch number of backers
  if (!backers) {
    const endpoint = 'https://us-central1-boxwood-academy-251913.cloudfunctions.net/scrapeSignatures';
    fetch(endpoint, {
      // mode: 'cors',
    })
      .then(res => res.json())
      .then(res => {
        if (res.backers) {
          setBackers(res.backers.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
        }
      });
  }

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
            activeClassName={href !== '/' ? 'menu-item-active' : null}
            className="menu-item cursor-pointer m-6 text-sand-100 font-bold hidden md:block"
            to={href}
            key={href}
          >
            {title}
          </Link>
        ))}
        {backers !== null && (
          <p className="text-sand-100 m-6 hidden md:block mr-8 ml-auto">
            {backers} danskere har allerede skrevet under
          </p>
        )}
        <Button
          secondary
          onClick={openModal}
          className={classNames('mr-4 md:mr-8 ml-auto', {
            'md:ml-0': backers !== null,
          })}
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
