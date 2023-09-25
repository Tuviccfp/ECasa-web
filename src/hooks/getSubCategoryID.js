import axios from "axios";

export const getSubCategoryID = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/category/get-sub-categorys/${id}`)
        return response.data
    } catch (error) {
        if(error) {
            console.log('Erro ao tentar buscar o ID')
        }
    }
}