'use client';
import React, { useState } from 'react';
import styles from './Links.module.css';
import NavLink from './navLink/navLink';
import Image from 'next/image';

const Links = () => {
  const [open, setOpen] = useState(false);

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
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {paths.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>
        <Image src="/menu.png" alt='menu' width={30} height={30} 
        onClick={()=> setOpen(prevVal => !prevVal)} className={styles.menuButton}/>
      {open && (
        <div className={styles.mobileLinks}>
          {paths.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
