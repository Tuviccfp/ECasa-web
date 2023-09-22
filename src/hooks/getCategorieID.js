import axios from "axios";

export const getCategorieID = async (_id) => {
    try {
        const response = await axios.get(`http://localhost:8080/categories/${_id}`)
        return response.data
    } catch (error) {
        if (error) {
            return 'Erro ao acessar o tipo de categoria'
        }
    }
}