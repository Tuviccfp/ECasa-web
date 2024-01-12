import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import withAuth from "../../../../../HOC";
import Cookies from "js-cookie";
import { getEmployeeById } from "../../../../../hooks/hookHOC/getEmployeeById";
import { convertPTBR } from "../../../../shared/convertPTBR";

const EditEmploy = ({ user }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [data, setData] = React.useState({});
  const [modelMessage, setModelMessage] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const handlePutEmploy = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `http://localhost:8080/updated-func/${id}`,
        { formData, author: [user.user._id] },
        { headers: { xoxota: Cookies.get("token") } }
      )
      .then(() => {
        setModelMessage(!modelMessage);
        setMessage("Cadastro atualizado com sucesso.");
        setTimeout(() => {
          setModelMessage(modelMessage);
          setMessage("");
        }, 4000);
      })
      .catch((err) => {
        setModelMessage(!modelMessage);
        setMessage("Não foi possível publicar.");
        setTimeout(() => {
          setModelMessage(modelMessage);
          setMessage("");
        }, 4000);
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchData = async () => {
    try {
      const date = await getEmployeeById(id);
      setData(date);
      console.log(date);
    } catch (error) {
      setData("Erro ao capturar os dados.");
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [id]);
  console.log(data);
  return (
    <section>
      <article>
        <p>{user.user.name}</p>
        <p>{user.user.matricula}</p>
        <p>{user.user.role}</p>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </article>

      <article>
        <h4>Alterar dados do cadastro:</h4>

        <div>
          <p>{data.name}</p>
          <p>{data.matricula}</p>
          <p>{convertPTBR(data.createdAt)}</p>
        </div>
      </article>
    
      <article>
        <form onSubmit={handlePutEmploy}>
          <fieldset>
            <label>
              Name:
              <input
                type="text"
                placeholder="Novo nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label>
              E-mail:
              <input
                type="email"
                placeholder="Novo email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Senha:
              <input
                type="password"
                placeholder="Nova senha"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>

            <label>
              Controle de Acesso:
              <input
                type="text"
                placeholder="Novo controle de acesso"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
            </label>

            <input type="submit" value={"Enviar"} />
          </fieldset>
        </form>
        <span>{modelMessage && <p>{message}</p>}</span>
      </article>
    </section>
  );
};

export default withAuth(EditEmploy);
