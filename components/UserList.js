// components/UserList.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const UserList = ({ users }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Users</h1>
            <ul className={styles.ulList}>
                {users.map((user) => (
                    <li key={user.id} className={styles.liItem}>
                        <Link href={`/user/${user.id}`} className={styles.link}>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
