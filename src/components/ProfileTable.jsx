import styles from '../css/profile.module.css';

const ProfileTable = ({ patient }) => {
  const {
    UserName,
    FirstName,
    LastName,
    Gender,
    PhoneNumber,
    Email,
    PaymentMethod,
    CreditCardNumber,
    CreditCardType,
    LastLogin,
    Latitude,
    Longitude,
    MacAddress,
    DomainName,
    URL,
  } = patient;

  return (
    <main>
      <section className={styles.cards}>
        <div className={styles.card}>
          <h2>Personal Details</h2>
          <p>Username: {UserName}</p>
          <p>FirstName: {FirstName}</p>
          <p>LastName: {LastName}</p>
          <p>Gender: {Gender}</p>
          <p>Phone: {PhoneNumber}</p>
          <p>Email: {Email}</p>
        </div>

        <div className={styles.card}>
          <h2>Payment Details</h2>
          <p>
            Method:{' '}
            <span method={PaymentMethod.toLowerCase()}>{PaymentMethod}</span>
          </p>
          <p>Card Number: {CreditCardNumber}</p>
          <p>Card Type: {CreditCardType}</p>
        </div>

        <div className={styles.card}>
          <h2>Location Details</h2>
          <p>Lat: {Latitude}</p>
          <p>Long: {Longitude}</p>
          <p>MacAddress: {MacAddress}</p>
          <p>Last Login: {LastLogin}</p>
        </div>

        <div className={styles.card}>
          <h2>Website</h2>
          <p>Domain Name: {DomainName}</p>
          <p>URL: {URL}</p>
        </div>
      </section>
    </main>
  );
};

export default ProfileTable;
