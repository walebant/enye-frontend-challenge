import styles from './Table.module.css';

const Table = ({ patients }) => {
  return (
    <main className={styles.Container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>SN</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {patients
            ?.sort((a, z) => (a.FirstName > z.FirstName ? 1 : -1))
            .map((patient, idx) => (
              <tr key={patient.UserName}>
                <td>{idx + 1}.</td>
                <td>{patient.FirstName}</td>
                <td>{patient.LastName}</td>
                <td>{patient.Gender}</td>
                <td>{patient.PhoneNumber}</td>
                <td>{patient.Email}</td>
                <td>
                  <span
                    method={patient.PaymentMethod.toLowerCase()}
                    className={styles.paymentMethod}>
                    {patient.PaymentMethod}
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
