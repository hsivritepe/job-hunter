import axios from 'axios';

export async function GetJobDetails(id) {
    try {
        const response = await axios.get(`/api/jobs/${id}`);
        return response.data.job;
    } catch (error) {
        throw error; // You can choose to handle the error differently if needed.
    }
}
