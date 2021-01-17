import styles from '../css/pagination.module.css';

const Pagination = ({ currentPage, totalPages, jumpTo }) => {
  const pages = Array.from(Array(totalPages).keys());

  return (
    <ul className={styles.pagination}>
      {pages?.map(num => {
        const pageNum = num + 1;
        return (
          <li key={num} className={currentPage === pageNum && styles.active}>
            <button onClick={() => jumpTo(pageNum)}>{pageNum}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
