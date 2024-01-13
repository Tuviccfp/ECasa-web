import * as React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LoginAdm = ({ setToken }) => {
  const [matricula, setMatricula] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [modelMessage, setModelMessage] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const conect1 = await axios.post("http://localhost:8080/login-admin", {
        matricula,
        password,
      });
      const expireTime = new Date();
      expireTime.setHours(expireTime.getHours() + 1);
      const token = conect1.data.token;
      setToken(token);
      Cookies.set("token", token, {
        expires: expireTime,
        path: "/",
        domain: "localhost",
      });
      setModelMessage(!modelMessage);
      setMessage('Usuário conectado.')
      setTimeout(() => {
        setModelMessage(modelMessage);
        setMessage('');
        navigate("/profile");
      }, 3000);
    } catch (error) {
      setModelMessage(!modelMessage);
      setMessage(
        "Ouve um erro ao logar, por favor verifique se informou suas credenciais corretamente."
      );
      setTimeout(() => {
        setModelMessage(false);
        setMessage("");
      }, 5000);
    }
  };

  return (
    <>
      <h4>Login</h4>

      <label>
        Mátricula:
        <input
          type="text"
          placeholder="Informe a sua mátricula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          placeholder="Informe a sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Entrar</button>
    </>
  );
};

export default LoginAdm;
