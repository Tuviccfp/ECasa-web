import * as React from "react";
import withAuth from "../../../../HOC";
import { useNavigate } from "react-router-dom";
import { getEmployee } from "../../../../hooks/hookHOC/getEmployee";
import axios from "axios";
import Cookies from "js-cookie";

const EmployeeCRUD = ({ user }) => {
  const [employee, setEmployee] = React.useState([]);
  const navigate = useNavigate();
  const [modelMessage, setModelMessage] = React.useState(false);
  const [message, setMessage] = React.useState("");

  async function fetchEmployee() {
    try {
      const response = await getEmployee();
      setEmployee(response);
    } catch (error) {
      setEmployee("Erro ao capturar os dados ou eles estão vázios.");
    }
  }

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:8080/delete-func-by-admin/${id}`, {
        headers: { xoxota: Cookies.get("token") },
      })
      .then(() => {
        setModelMessage(!modelMessage);
        setMessage("Cadastro deletado com sucesso. Atualize a página.");
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
        console.log(err.message);
      });
  };

  React.useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <section>
      <article>
        <p>{user.user.name}</p>
        <p>{user.user.role}</p>
        <p>{user.user.matricula}</p>
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button onClick={() => navigate('/create-user-func')}>
          Cadastrar novos funcionários
        </button>
      </article>

      <article>
        {employee.map((item) => (
          <ul key={item._id}>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.matricula}</li>
            <li>{item.author.name}</li>
            <li>{item.author.role}</li>
            <li>{item.author.matricula}</li>
            <li>{item.createdAt}</li>
            <button onClick={() => navigate(`/edit-employee/${item._id}`)}>
              Editar
            </button>
            <button onClick={() => handleDelete(item._id)}>Deletar</button>
          </ul>
        ))}
        <span>
            {modelMessage && (
                <p>{message}</p>
            )}
        </span>
      </article>
    </section>
  );
};

export default withAuth(EmployeeCRUD);
