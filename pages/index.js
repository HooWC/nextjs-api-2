// pages/index.js
import { getUsers } from './api/users';
import UserList from '../components/UserList';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const users = await getUsers();
  return { props: { users } };
}

const HomePage = ({ users }) => {
  return <div className={styles.container}><UserList users={users} /></div>;
};

export default HomePage;
