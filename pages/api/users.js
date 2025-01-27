// pages/api/users.js
import axios from 'axios';

export async function getUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}
