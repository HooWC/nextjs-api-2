// pages/user/[id].js
import { useRouter } from 'next/router';
import { getUsers } from '../api/users';
import UserDetails from '../../components/UserDetails';

export async function getServerSideProps({ params }) {
    const users = await getUsers();
    const user = users.find((user) => user.id === parseInt(params.id));
    return { props: { user } };
}

const UserPage = ({ user }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return <UserDetails user={user} />;
};

export default UserPage;
