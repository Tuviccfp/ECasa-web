import axios from 'axios'

export const getProducts = async () => {
    try {
        const responseProduct = axios.get('http://localhost:8080/products')
        return (await responseProduct).data
    } catch (error) {
        return 'Erro ao capturar a lista de produtos'
    }
}