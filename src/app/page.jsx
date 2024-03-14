import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, debitis?
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src='/brands.png'
            alt='brands'
            fill
            className={styles.brandsImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src='/hero.gif' alt='hero' fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
