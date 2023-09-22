import axios from 'axios';

export const getCategories = async () => {
    try {
        const response = await axios.get('http://localhost:8080/categories')
        return response.data
    } catch (error) {
        if(error) {
            console.log('Erro ao consultar categorias')
        }
    }
}