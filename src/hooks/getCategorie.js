import axios from 'axios';
import Cookies from 'js-cookie';

export const getCategories = async () => {
    try {
        const response = await axios.get('http://localhost:8080/categories', {headers: {xoxota: Cookies.get('token')}})
        return response.data    
    } catch (error) {
        if(error) {
            console.log('Erro ao consultar categorias')
        }
    }
}