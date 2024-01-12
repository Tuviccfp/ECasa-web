import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent) => {
    const WithAuth = () => {
        const [user, setUser] = React.useState(null);
        const navigate = useNavigate();

        React.useEffect(() => {
            const token = Cookies.get('token');
            
            if(!token) {
                console.log('Ops.. Parece que o sistema não consegue te identificar, você será redirecionado para a página de login');
                // navigate('/login');
                console.log("Erro ao identificar o token");
            } else {
                axios.get('http://localhost:8080/profile', {
                    headers: {
                        xoxota: token
                    }
                }).then((result) => {
                    console.log(result)
                    setUser(result.data.user);
                }).catch((err) => {
                    // navigate('/login');
                    console.log('Erro ao logar')
                });
            }
        }, [navigate]);
        return user ? <WrappedComponent user={user} /> : null;
    }
    return WithAuth;
}

export default withAuth;