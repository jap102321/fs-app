import React from 'react';
import styles from './AdminUsers.module.css';
import { getUsers } from '@/lib/data';
import Image from 'next/image';
import { deleteUser } from '@/lib/action';

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div classname={styles.container}>
      <div classname={styles.container}>
        <h1>Posts</h1>
        {users?.map((user) => (
          <div className={styles.user} key={user.id}>
            <div className={styles.detail}>
              <Image
                src={user.img || '/noAvatar.png'}
                alt=''
                width={50}
                height={50}
              />
              <span className={styles.userTitle}>{user.username}</span>
            </div>
            <form action={deleteUser}>
              <input type='hidden' name='id' value={user.id} />
              <button className={styles.postButton}>Delete</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;
