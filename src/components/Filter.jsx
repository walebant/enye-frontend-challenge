import styles from '../css/filter.module.css';

const Pagination = ({ data, filter, setFilter }) => {
  const payment = [...new Set(data.map(d => d.PaymentMethod))];
  const gender = [...new Set(data.map(d => d.Gender))];

  const handleChange = e => {
    const { name, value } = e.target;
    setFilter({ [name]: value });
  };
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterGroup}>
        <p>Filter by Payment Method: </p>
        <select name='payment' onChange={handleChange} value={filter.payment}>
          <option value=''>None</option>
          {payment.map(m => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterGroup}>
        <p>Filter by Gender: </p>
        <select name='gender' onChange={handleChange} value={filter.gender}>
          <option value=''>None</option>
          {gender.map(g => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
