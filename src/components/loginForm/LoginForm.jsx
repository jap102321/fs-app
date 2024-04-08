'use client';
import { login } from '@/lib/action';
import Link from 'next/link';
import React from 'react';
import { useFormState } from 'react-dom';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <>
      <form className={styles.form} action={formAction}>
        <input type='text' placeholder='Username' name='username' />
        <input type='password' placeholder='Password' name='password' />
        <button>Login with credentials</button>
        {state?.error}
        <Link href='/register'>
          {"Don't have an account?"} <b>Register</b>
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
