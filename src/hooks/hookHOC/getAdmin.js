import axios from 'axios';
import Cookies from 'js-cookie';

export const getAdmins = async () => {
    try {
        const response = axios.get('http://localhost:8080/get-admins-by-admins', { headers: { xoxota: Cookies.get('token')}});
        return (await response).data;
    } catch (error) {
        console.log('Erro ao capturar os usuários adm.')
    }
}