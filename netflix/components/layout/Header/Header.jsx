import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}></div>
        <ul className={styles.navbar__list}>
          <li className={styles.links}>Films</li>
          <li className={styles.links}>Ma liste</li>
        </ul>
      </nav>
      <ul className={styles.navbar__tools}>
        <li className={styles.tool}>
          <div className={styles.search}>Search</div>
        </li>
        <li className={styles.tool}>
          <div className={styles.avatar}></div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
