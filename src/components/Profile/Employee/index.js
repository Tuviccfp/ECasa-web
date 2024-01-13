import * as React from 'react';
import withAuth from '../../../HOC';
import Product from '../../shared/Product';
import { getProducts } from '../../../hooks/getProduct';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const ProfileEmployee = ({ user }) => {
    const [product, setProduct] = React.useState([]);
    const [modelMessage, setModelMessage] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const navigate = useNavigate();

    async function fetchProducts() {
        try {
            const dataProduct = await getProducts();
            setProduct(dataProduct);
        } catch (error) {
            setProduct('Erro ao listar os produtos.')
        }
    }

    const handleLogout = async () => {
      await axios.post('http://localhost:8080/logout', {}, { headers: { xoxota: Cookies.get('token')}}).then(() => {
        setModelMessage(!modelMessage);
        setMessage("Sessão deslogada com sucesso.");
        setTimeout(() => {
          setModelMessage(modelMessage);
          setMessage("");
          navigate('/login-employees');
        }, 5000);
      }).catch((err) => {
        setModelMessage(!modelMessage);
        setMessage("Houve um erro ao deslogar da sessão.");
        setTimeout(() => {
          setModelMessage(modelMessage);
          setMessage("");
        }, 4000);
      });
    }

    React.useEffect(() => {
        fetchProducts();
    }, [])

  return (
    <section>
      <article>
        <h5>Credenciais</h5>
        <p>{user.user.name}</p>
        <p>{user.user.role}</p>
        <p>{user.user.nickname}</p>
        <p>{user.user.email}</p>
        <p>{user.user.matricula}</p>
        <span>
          {modelMessage && (
            <p>{message}</p>
          )}
        </span>
      </article>
      <article>
        <button onClick={() => navigate('/list-categories-admin')}>Listar categorias</button>
        <button onClick={() => navigate('/save-new-categorie-admin')}>Criar nova categoria.</button>
        <button onClick={() => navigate('/save-new-product-admin')}>Criar novo produto</button>
        <button onClick={() => navigate('/save-new-datasheet-admin')}>Criar ficha técnica</button>
        <button onClick={() => navigate('/acess-employee')}>Funcionários</button>
        <button onClick={() => navigate('/list-admins')}>Admins</button>
        <button onClick={handleLogout}>Deslogar da sessão</button>
      </article>
      <article>
        {product.searchProduct && product.searchProduct.length > 0 ? (
          <div className="screen-product">
            {product.searchProduct.map((item, index) => (
              <div className="model-product" key={index}>
                <Product item={item} />
              </div>
            ))}
          </div>
        ) : (
          <p>Carregando a lista de produtos...</p>
        )}
      </article>
    </section>
  );
};

export default withAuth(ProfileEmployee);