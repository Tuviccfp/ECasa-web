import * as React from "react";
import withAuth from "../../../../../HOC";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const NewSubCategorie = ({ user }) => {
  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [modelMessage, setModelMessage] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate();

  const handleSendNewCategorie = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8080/category/save-subcategories",
        { name, category, author: [user.user._id] },
        { headers: { xoxota: Cookies.get("token") } }
      )
      .then(() => {
        setModelMessage(!modelMessage);
        setMessage("Sub Categoria publicada com sucesso");
        setTimeout(() => {
          setModelMessage(false);
          setMessage("");
        }, 4000);
      })
      .catch((err) => {
        setModelMessage(!modelMessage);
        setMessage("Não foi possível publicar.");
        setTimeout(() => {
          setModelMessage(false);
          setMessage("");
        }, 4000);
        console.log(err.message);
      });
  };

  return (
    <section>
      <article>
        <p>{user.user.name}</p>
        <p>{user.user.role}</p>
        <p>{user.user._id}</p>
        <button onClick={() => navigate(-1)}>Voltar página</button>
      </article>
      <article>
        <form onSubmit={handleSendNewCategorie}>
            <fieldset>
                <label>
                    Nome da Sub Categoria:
                    <input type="text" placeholder="Informe o nome da Sub Categoria" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    ID da categoria relacionada:
                    <input type="text" placeholder="Informe o id da categoria a ser relacionada" value={category} onChange={(e) => setCategory(e.target.value)} />
                </label>
                <input type="submit" value={'Enviar'}/>
            </fieldset>
        </form>
      </article>
      <article>
        {modelMessage && (
            <div>
                {message}
            </div>
        )}
      </article>
    </section>
  );
};

export default withAuth(NewSubCategorie);