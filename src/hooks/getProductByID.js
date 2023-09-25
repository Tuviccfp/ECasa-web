import axios from 'axios'

export const getProductByID = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/products/${id}`)
        return response.data
    } catch (error) {
        return 'Erro ao se conectar com o servidor.'
    }
}