import axios from 'axios';
import { BASE_URL, IMAGE_UPLOAD_API_URL } from '../constants'

export const imageUploadAPI = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    try {
        const apiResponse = await axios.post(
            `${BASE_URL}${IMAGE_UPLOAD_API_URL}`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        console.log('apiResponse.data;', apiResponse.data.extractedText);
        return apiResponse.data;
    } catch(error) {
        console.error("Inside Image upload API err", error);
        throw error?.response?.data || new Error('An error occurred');
    }

};