import React from 'react';
import { handleGithubLogin } from '@/lib/action';
import LoginForm from '@/components/loginForm/LoginForm';
import styles from './login.module.css';

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.github} action={handleGithubLogin}>
          <button>Login with GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
