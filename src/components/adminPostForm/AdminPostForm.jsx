'use client';
import React from 'react';
import styles from './AdminPostForm.module.css';
import { addPost } from '@/lib/action';
import { useFormState } from 'react-dom';

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <div classname={styles.container}>
      <form action={formAction} className={styles.container}>
        <input type='hidden' name='userId' value={userId} />
        <input type='text' name='title' placeholder='title' />
        <input type='text' name='desc' placeholder='desc' />
        <input type='text' name='slug' placeholder='slug' />
        <input type='text' name='img' placeholder='img' />
        <button>Add</button>
        {state && state?.error}
      </form>
    </div>
  );
};

export default AdminPostForm;
