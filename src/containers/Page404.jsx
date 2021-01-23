import React from 'react';
import styles from '../css/notfound.module.css';

const Page404 = () => {
  return (
    <div className={styles.Container}>
      <section>
        <h1>
          404{' '}
          <span role='image' aria-label='sorry'>
            😢
          </span>
        </h1>
        <p>Page Not Found</p>
      </section>
    </div>
  );
};

export default Page404;
