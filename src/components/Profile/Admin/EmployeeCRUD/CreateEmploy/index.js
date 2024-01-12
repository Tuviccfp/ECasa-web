import * as React from "react";
import withAuth from "../../../../../HOC";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const CreateEmploy = ({ user }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [modelMessage, setModelMessage] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate();

  const handleSendEmploy = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8080/create-user-func",
        { formData, author: user.user._id },
        { header: { xoxota: Cookies.get("token") } }
      )
      .then(() => {
        setModelMessage(!modelMessage);
        setMessage("Funcionário registrado com sucesso.");
        setTimeout(() => {
          setModelMessage(modelMessage);
          setMessage("");
          navigate(-1);
        }, 5000);
      })
      .catch((err) => {
        setModelMessage(!modelMessage);
        setMessage("Não foi possível registrar o funcionário.");
        setTimeout(() => {
          setModelMessage(modelMessage);
          setMessage("");
        }, 4000);
        console.log(err.message);
      });
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  }

  return (
    <section>
        <article>
            <p>{user.user.name}</p>
            <p>{user.user.matricula}</p>
            <p>{user.user.role}</p>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </article>

        <article>
            <form onSubmit={handleSendEmploy}>
                <fieldset>
                    <label>
                        Nome:
                        <input type="text" placeholder="Ensira seu nome" name="name" value={formData.name} onChange={handleChange}/>
                    </label>

                    <label>
                        E-mail:
                        <input type="email" placeholder="Ensira seu e-mail" name="email" value={formData.email} onChange={handleChange}/>
                    </label>

                    <label>
                        Senha:
                        <input type="password" placeholder="Ensira sua senha" name="password" value={formData.password} onChange={handleChange}/>
                    </label>

                    <input type="submit" value={'Enviar'}/>
                </fieldset>
            </form>
            <span>
                {modelMessage && (
                    <p>{message}</p>
                )}
            </span>
        </article>
    </section>
  )
};

export default withAuth(CreateEmploy);
