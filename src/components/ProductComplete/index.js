import * as React from 'react';
import { getProductByID } from '../../hooks/getProductByID';
import { useParams } from 'react-router-dom';
import DataSheet from '../shared/DataSheet';
import './style.css'

export default function ProductComplete() {
 const [dataProduct, setDataProduct] = React.useState({});
 const { id } = useParams();

 async function fetchData() {
     try {
         const responseProduct = await getProductByID(id)
         setDataProduct(responseProduct)
     } catch (error) {
         setDataProduct(error)
     }
 }

 React.useEffect(() => {
    fetchData()
 }, [id])

 console.log(dataProduct)

 if (dataProduct.productID && dataProduct.productID.name) {
    return (
        <section className='container-principal'>
            <center>
                <div>
                    <h1>{dataProduct.productID.name}</h1>
                    <p>Preço: R$ {dataProduct.productID.price}</p>
                    <img src={dataProduct.productID.img} alt={dataProduct.productID.name} />
                    <p>{dataProduct.productID.short_description}</p>
                </div>

                <div>
                    {dataProduct.dataSheetProduct && dataProduct.dataSheetProduct.length > 0 ? (
                        <span>
                            {dataProduct.dataSheetProduct.map((item, index) => (
                                <div key={index}>
                                    <DataSheet item={item} />
                                </div>
                            ))}
                        </span>
                    ) : (
                        <div></div>
                    )}
                </div>
            </center>
        </section>
    );
 } else {
    return <p>Dados do produto não encontrados.</p>;
 }
}
//  return (
//     <section>
//         {dataProduct.productID && dataProduct.productID.length > 0 ? (
//             <div>
//                 <Product item={dataProduct.productID}/>
//             </div>
//         ) : (
//             <p>Carregando os dados do produto...</p>
//         )}
//     </section>
//  )
// }