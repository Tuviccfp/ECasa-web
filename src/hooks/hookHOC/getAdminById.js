import axios from 'axios';

export const getAdmins = async (id) => {
    try {
        const response = axios.get(`http://localhost:8080/get-admins/${id}`);
        return (await response).data;
    } catch (error) {
        console.log('Erro ao capturar os usuários adm através do id.');
    }
}