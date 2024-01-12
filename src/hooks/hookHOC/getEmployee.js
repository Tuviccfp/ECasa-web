import axios from 'axios';
import Cookies from 'js-cookie';

export const getEmployee = async () => {
    try {
        const response = await axios.get('http://localhost:8080/get-func-by-admin', {headers: {xoxota: Cookies.get('token')}});
        return response.data
    } catch (error) {
        if(error) {
            console.log('Erro ao buscar funcionários')
        }
    }
}