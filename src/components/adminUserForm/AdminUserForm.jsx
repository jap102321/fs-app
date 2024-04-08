'use client';
import React from 'react';
import styles from './AdminUserForm.module.css';
import { useFormState } from 'react-dom';
import { addUser } from '@/lib/action';

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <div classname={styles.container}>
      <form action={formAction} className={styles.container}>
        <input type='text' name='username' placeholder='username' />
        <input type='text' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='password' />
        <input type='text' name='img' placeholder='img' />
        <select name='isAdmin'>
          <option value='false'>Is Admin?</option>
          <option value='false'>No</option>
          <option value='true'>Yes</option>
        </select>
        <button>Add user</button>
        {state && state?.error}
      </form>
    </div>
  );
};

export default AdminUserForm;
