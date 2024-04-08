import React from 'react';
import Links from './Links/Links';
import styles from './navbar.module.css';
import { auth } from '@/lib/auth';

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
