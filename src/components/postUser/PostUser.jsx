import React from 'react';
import styles from './postUser.module.css';
import { getUser } from '@/lib/data';
import Image from 'next/image';

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {
//       next: { revalidate: 3600 },
//     }
//   );
//   if (!res.ok) {
//     throw new Error('Fetch is not working!');
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={
          user.avatar
            ? user.avatar
            : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        }
        alt=''
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
