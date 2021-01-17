import styles from './Header.module.css';

const Header = ({ query, setQuery }) => {
  return (
    <header className={styles.Header}>
      <h1 className={styles.title}>Records</h1>
      <div className={styles.searchBox}>
        <input
          type='text'
          placeholder='Search patients...'
          className={styles.input}
          value={query}
          onChange={e => setQuery(e.target.value.toLowerCase())}
        />
      </div>
    </header>
  );
};

export default Header;
