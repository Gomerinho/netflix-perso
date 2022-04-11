import { useRouter } from 'next/router';
import { React, useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleChange(e) {
    setSearch(e.target.value);
    router.push('/search?q=' + e.target.value);
    if (e.target.value === '') {
      router.push('/');
    }
  }
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
          <div className={styles.search}>
            <input
              type='text'
              onChange={e => handleChange(e)}
              value={search}
              placeholder='Rechercher ...'
            />
          </div>
        </li>
        <li className={styles.tool}>
          <div className={styles.avatar}></div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
