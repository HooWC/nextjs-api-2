// components/UserDetails.js
import styles from '../styles/Home.module.css';

const UserDetails = ({ user }) => {
    if (!user) return <div className={styles.container}>Loading...</div>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{user.name}</h1>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
        </div>
    );
};

export default UserDetails;
