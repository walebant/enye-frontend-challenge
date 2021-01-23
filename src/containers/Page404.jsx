import React from 'react';
import styles from '../css/notfound.module.css';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className={styles.Container}>
      <section>
        <h1>
          404{' '}
          <span role='img' aria-label='sorry'>
            😢
          </span>
        </h1>
        <p>Page Not Found</p>
        <Link to='/'>Go Home</Link>
      </section>
    </div>
  );
};

export default Page404;
