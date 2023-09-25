import * as React from 'react';
import { getProductByID } from '../../hooks/getProductByID';
import { useParams } from 'react-router-dom';
import Product from '../shared/Product';

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

 if (dataProduct && dataProduct.name) {
    return (
        <section>
            <div>
                <h1>{dataProduct.name}</h1>
                <p>Preço: R$ {dataProduct.price}</p>
                <img src={dataProduct.img} alt={dataProduct.name} />
                <p>{dataProduct.short_description}</p>
            </div>
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