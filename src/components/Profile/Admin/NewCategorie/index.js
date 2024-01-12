import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import withAuth from '../../../../HOC';
import Cookies from 'js-cookie';

const NewCategorie = ({ user }) => {
    const [name, setName] = React.useState('');
    const [modelMessage, setModelMessage] = React.useState(false);
    const [message, setMessage] = React.useState('')
    const navigate = useNavigate();

    const handleSubmitCategory = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/save-categories', { name, author: [user.user._id] }, { headers: { xoxota: Cookies.get('token') }}).then(() => {
            setModelMessage(!modelMessage);
            setMessage('Categoria publicada com sucesso');
            setTimeout(() => {
                setModelMessage(false);
                setMessage('');
            }, 4000)
        }).catch((err) => {
            setModelMessage(!modelMessage);
            setMessage('Não foi possível publicar.');
            console.log(user.user._id)
            setTimeout(() => {
                setModelMessage(false);
                setMessage('');
            }, 4000);
            console.log(err.message);
        });
    }

    return (
        <section>
            <article>
                <p>{user.user.name}</p>
                <p>{user.user.role}</p>
                <p>{user.user.matricula}</p>
                <button onClick={() => navigate(-1)}>Voltar página</button>
            </article>
            <article>
                <form onSubmit={handleSubmitCategory}>
                    <fieldset>
                        <label>
                            Criar nova categoria:
                            <input type='text' placeholder='Informe o nome da categoria' value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                        <input type='submit' value={'Enviar'}/>
                    </fieldset>
                </form>
                {modelMessage && (
                    <div>
                        {message}
                    </div>
                )}
            </article>
        </section>
    )
}

export default withAuth(NewCategorie);