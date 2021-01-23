import styles from '../css/profile.module.css';
import ProfileTable from '../components/ProfileTable';
import { Link, Redirect } from 'react-router-dom';

const Profile = ({ selectedPatient }) => {
  if (!selectedPatient) return <Redirect to='/' />;

  return (
    <section className={styles.Container}>
      <div className={styles.goback}>
        <Link to='/'>Go Back</Link>
      </div>
      <h1>
        {selectedPatient.FirstName} {selectedPatient.LastName}
      </h1>
      <ProfileTable patient={selectedPatient} />
    </section>
  );
};

export default Profile;
