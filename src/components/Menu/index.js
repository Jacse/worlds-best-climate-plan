import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import text from '../../i18n/da';
import styles from './index.module.css';
import Button from '../Button';
import { ModalContext } from '../SupportModal';
import classNames from 'classnames';

const pages = [
  ['/', text.title],
  ['/the-plan', text.moreAboutThePlan],
  ['/behind-the-plan', text.behindThePlan],
];

const MenuItems = () => (
  <>
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
  </>
);

const Menu = ({ scrollThreshold = 100 }) => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const openModal = useContext(ModalContext);

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
      <div
        className={classNames(styles.navBar, {
          green: isSticky,
          [styles.navBarActive]: isSticky,
        })}
      >
        <Link to="/">
          <img
            src="/logo_white.png"
            alt=""
            className={classNames(styles.logo, {
              // [styles.logoActive]: !isSticky,
            })}
          />
        </Link>
        <div
          className={classNames(styles.burgerButton, {
            // [styles.burgerButtonActive]: isSticky,
          })}
          onClick={() => setBurgerActive(true)}
        >
          <span>
            <span className={styles.burgerButtonBar}></span>
            <span className={styles.burgerButtonBar}></span>
            <span className={styles.burgerButtonBar}></span>
          </span>
        </div>
        <div
          className={classNames(styles.menuItems, {
            [styles.menuItemsActive]: true, //!isSticky,
          })}
        >
          <MenuItems />
        </div>
        <Button onClick={openModal} className={styles.supportButton}>
          {text.support}
        </Button>
      </div>
      <div
        className={classNames(styles.burgerMenu, {
          [styles.burgerMenuActive]: burgerActive,
        })}
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
        className={classNames(styles.overlay, {
          [styles.overlayActive]: burgerActive,
        })}
        onClick={() => setBurgerActive(false)}
      ></div>
    </div>
  );
};

export default Menu;
