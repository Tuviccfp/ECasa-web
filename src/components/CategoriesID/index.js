import * as React from 'react'
import { useParams } from 'react-router-dom';
import { getCategorieID } from '../../hooks/getCategorieID';

export default function CategoriesID() {
    const [dataID, setDataID] = React.useState([]);
    const { _id } = useParams();

    async function fetchCategoriesID() {
        try {
            const data = await getCategorieID(_id);
            setDataID(data)
        } catch (error) {
            setDataID('Erro ao acessar a categoria.')
        }
    }

    React.useEffect(() => {
        fetchCategoriesID();
    }, [])

    console.log(dataID)

    return (
        <div></div>
    )
}