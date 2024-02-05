import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';
const API_URL = 'api/auth/';

export const login = async (email, password) => {
    try {
        const apiResponse = await axios.post(
            `${BASE_URL}${API_URL}login`,
            {email, password}
            );
        console.info("API res", apiResponse);
        return apiResponse.data;
    }catch (error) {
        console.error("API err res", error);
        throw error?.response?.data || new Error('An error occurred');
    }
};

export const register = async (userName, email, password) => {
    try {
        const apiResponse = await axios.post(
            `${BASE_URL}${API_URL}register`, 
            {userName, email, password}
            );
        return apiResponse.data;
    }catch(error) {
        throw error?.response?.data || new Error('Registration failed')
    }
};