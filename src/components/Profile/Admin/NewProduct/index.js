import * as React from "react";
import withAuth from "../../../../HOC";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const NewProduct = ({ user }) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState();
  const [img, setImg] = React.useState("");
  const [short_description, setShortDescription] = React.useState("");
  const [long_description, setLongDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [subcategory, setSubCategory] = React.useState("");
  const navigate = useNavigate();
  const [modelMessage, setModelMessage] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSendNewProd = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8080/save-products",
        {
          name,
          price,
          img,
          short_description,
          long_description,
          category,
          subcategory,
          author: [user.user._id],
        },
        { headers: { xoxota: Cookies.get("token") } }
      )
      .then(() => {
        setModelMessage(!modelMessage);
        setMessage("Produto publicado com sucesso");
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
        <p>Usuário: {user.user.name}</p>
        <p>Setor: {user.user.role}</p>
        <p>Matricula: {user.user.matricula}</p>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </article>

      <article>
        <form onSubmit={handleSendNewProd}>
          <fieldset>
            <label>
              Nome:
              <input
                type="text"
                placeholder="Informe o nome do produto"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label>
              Preço:
              <input
                type="number"
                placeholder="Informe o preço do produto"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>

            <label>
              Imagem do produto:
              <input
                type="text"
                placeholder="Informe a url da imagem do produto"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </label>

            <label>
              <input
                type="text"
                placeholder="Informe a descrição prévia do produto"
                value={short_description}
                onChange={(e) => setShortDescription(e.target.value)}
              />
            </label>

            <label>
              <input
                type="text"
                placeholder="Informe a descrição longa do produto"
                value={long_description}
                onChange={(e) => setLongDescription(e.target.value)}
              />
            </label>

            <label>
              <input
                type="text"
                placeholder="Informe o id da categoria do produto"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>

            <label>
              <input
                type="text"
                placeholder="Informe o id da sub categoria do produto"
                value={subcategory}
                onChange={(e) => setSubCategory(e.target.value)}
              />
            </label>

            <input type="submit" value={"Enviar"} />
          </fieldset>
        </form>
        {modelMessage && <span>{message}</span>}
      </article>
    </section>
  );
};

export default withAuth(NewProduct);
