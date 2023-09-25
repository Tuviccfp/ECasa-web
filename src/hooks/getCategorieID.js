import axios from "axios";

export const getCategorieID = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/categories/${id}`)
        return response.data
    } catch (error) {
        if (error) {
            return console.log('Erro ao acessar o tipo de categoria' + error)
        }
    }
}