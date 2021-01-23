import styles from '../css/table.module.css';
import { Link } from 'react-router-dom';

const Table = ({ patients, setSelectedPatient }) => {
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
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {patients.map(patient => (
            <tr key={patient.UserName}>
              <td>{patient.sn}.</td>
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
              <td>
                <Link to='/profile' onClick={() => setSelectedPatient(patient)}>
                  View Profile
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
