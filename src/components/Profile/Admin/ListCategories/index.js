import * as React from 'react';
import { getCategories } from '../../../../hooks/getCategorie';
import withAuth from '../../../../HOC';
import { useNavigate } from 'react-router-dom';

const ListCategories = ({ user }) => {
    const [categories, setCategories] = React.useState([]);
    const navigate = useNavigate();

    async function fetchCategories() {
        try {
            const dataCategories = await getCategories();
            setCategories(dataCategories);
        } catch (error) {
            setCategories('Erro ao listar as categorias');
        }
    } 

    React.useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <section>
            <article>
                <h4>Credencias</h4>
                <p>{user.user.name}</p>
                <p>{user.user.role}</p>
                <button onClick={() => navigate('/save-new-subcategorie-admin')}>Criar nova Subcategoria</button>
            </article>

            <article>
                {categories.map((item) => (
                    <div>
                        <p>{item.name}</p>
                        <p>{item._id}</p>
                        <p>{item.author}</p>
                        <p>Data de criação: {item.createdAt}</p>
                    </div>
                ))}
            </article>
        </section>
    )
}

export default withAuth(ListCategories)