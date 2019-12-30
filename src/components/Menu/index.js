import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styles from './index.module.css';
import Button from '../Button';

const pages = [
  ['/', 'Verdens Bedste Klimaplan'],
  ['/the-plan', 'Læs mere om planen'],
  ['/behind-the-plan', 'Bag planen'],
];

const MenuItems = () => (
  <React.Fragment>
    {pages.map(([href, title]) => (
      <Link
        activeClassName={styles.menuItemActive}
        className={styles.menuItem}
        to={href}
        key={href}
      >
        {title}
      </Link>
    ))}
  </React.Fragment>
);

const Menu = ({ scrollThreshold = 100 }) => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    setSticky(window.scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={styles.navBar}>
        <div
          className={[
            styles.burgerButton,
            isSticky ? styles.burgerButtonActive : '',
          ].join(' ')}
          onClick={() => setBurgerActive(true)}
        >
          <span>
            <span className={styles.burgerButtonBar}></span>
            <span className={styles.burgerButtonBar}></span>
            <span className={styles.burgerButtonBar}></span>
          </span>
        </div>
        <div
          className={[
            styles.menuItems,
            !isSticky ? styles.menuItemsActive : '',
          ].join(' ')}
        >
          <MenuItems />
        </div>
        <Button className={styles.supportButton}>Støt</Button>
      </div>
      <div
        className={[
          styles.burgerMenu,
          burgerActive ? styles.burgerMenuActive : '',
        ].join(' ')}
      >
        <div
          className={styles.crossButton}
          onClick={() => setBurgerActive(false)}
        >
          <span className={styles.crossBar}></span>
          <span className={styles.crossBar}></span>
        </div>
        <MenuItems />
      </div>
      <div
        className={[
          styles.overlay,
          burgerActive ? styles.overlayActive : '',
        ].join(' ')}
        onClick={() => setBurgerActive(false)}
      ></div>
    </div>
  );
};

export default Menu;
