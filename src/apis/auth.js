import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';
const API_URL = 'api/auth/';

export const login = async (email, password) => {
    try {
        const apiResponse = await axios.post(`${BASE_URL}${API_URL}login`, {email, password});
        return apiResponse.data;
    }catch (error) {
        throw (error.response && error.response.data) ? error.response.data : new Error('An error occurred');
    }
};