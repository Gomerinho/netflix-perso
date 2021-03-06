import Link from 'next/link';
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
        <Link href={'/'} passHref>
          <div
            className={styles.navbar__logo}
            style={{ cursor: 'pointer' }}
          ></div>
        </Link>

        <ul className={styles.navbar__list}>
          <Link href={'/'} passHref>
            <li className={styles.links}>Films</li>
          </Link>
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
          <Link href={'/logout'} passHref>
            <div className={styles.avatar}></div>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
