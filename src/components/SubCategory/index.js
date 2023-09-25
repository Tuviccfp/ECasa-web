import * as React from 'react'
import { getSubCategoryID } from '../../hooks/getSubCategoryID';
import { useParams } from 'react-router-dom';
import Product from '../shared/Product';

export default function SubCategoryID() {
    const [dataSubCategoryID, setDataSubCategoryID] = React.useState();
    const { id } = useParams();

    const fecthData = async() => {
        try {
            const data = await getSubCategoryID(id)
            setDataSubCategoryID(data);
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        fecthData();
    }, [id])

    if(dataSubCategoryID === undefined) {
        return null
    }
    return (
        <section>
            {dataSubCategoryID.responseProductBySubCategory && dataSubCategoryID.responseProductBySubCategory.length > 0 ? (
                <div>
                    {dataSubCategoryID.responseProductBySubCategory.map((item, index) => (
                        <div key={index}>
                            <Product item={item}/>
                        </div>
                    ))}
                </div>
            ) : (   
                <p>Carregando a lista de produtos...</p>
            )}
        </section>
    )
}