import Link from 'next/link';
import React from 'react';
import styles from './Links.module.css';
import NavLink from './navLink/navLink';

const Links = () => {
  const paths = [
    {
      title: 'Homepage',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {paths.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
          <button>Logout</button>
        </>
      ) : (
        <NavLink item={{ title: 'Login', path: '/login' }} />
      )}
    </div>
  );
};

export default Links;
