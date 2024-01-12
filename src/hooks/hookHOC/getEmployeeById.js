import axios from 'axios';
import Cookies from 'js-cookie';

export const getEmployeeById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/get-func-by-admin/${id}`, {headers: {xoxota: Cookies.get('token')}});
        return response.data
    } catch (error) {
        console.log('Erro ao capturar o funcionário pelo id.', error.message);
        throw error
    }
}