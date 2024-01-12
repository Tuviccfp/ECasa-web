import * as React from 'react';
import withAuth from '../../../../HOC';
import {useNavigate} from 'react-router-dom'
import { getAdmins } from '../../../../hooks/hookHOC/getAdmin';
import { convertPTBR } from '../../../shared/convertPTBR';

const ListAdmins = ({user}) => {
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();

    const fetchAdmins = async () => {
        try {
            const dataAxios = await getAdmins();
            setData(dataAxios);
        } catch (error) {
            setData('Erro ao capturar a lista.');
        }
    }

    React.useEffect(() => {
        fetchAdmins();
    }, []);

    return (
        <section>
            <article>
                <h4>Credenciais</h4>
                <p>{user.user.name}</p>
                <p>{user.user.matricula}</p>
                <p>{user.user.role}</p>
                <button onClick={() => navigate(-1)}>Voltar</button>
            </article>
            <article>
                {data.map((item) => (
                    <ul key={item._id}>
                        <li>
                            {item.name}
                        </li>

                        <li>
                            {item.email}
                        </li>

                        <li>
                            {item.matricula}
                        </li>

                        <li>
                            {item.author.name}
                        </li>

                        <li>
                            {item.author.matricula}
                        </li>

                        <li>
                            {item.author.role}
                        </li>

                        <li>
                            {item.role}
                        </li>

                        <li>
                            {convertPTBR(item.createdAt)}
                        </li>
                    </ul>   
                ))}
            </article>
        </section>
    )
}

export default withAuth(ListAdmins);