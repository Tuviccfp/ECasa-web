import * as React from "react";
import withAuth from "../../../../HOC";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const NewDataSheet = ({ user }) => {
  const [formData, setFormData] = React.useState({
    marca: "",
    modelo: "",
    dataFab: "",
    dataVal: "",
    dimensions: "",
    pound: 0,
    material: "",
    color: "",
    capacity: 0,
    potencity: 0,
    func: "",
    packaging: {
      tipo: "",
      dimensions: "",
      pound: 0,
    },
    guarantee: {
      period: "",
      details: "",
    },
    manufacturer: "",
    product: "",
  });
  const [modelMessage, setModelMessage] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendData = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8080/products/save-datasheet",
        { formData, author: [user.user._id] },
        { headers: { xoxota: Cookies.get("token") } }
      )
      .then(() => {
        setModelMessage(!modelMessage);
        setMessage("Ficha técnica publicada com sucesso");
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

  return (
    <section>
      <article>
        <p>{user.user.name}</p>
        <p>{user.user.role}</p>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </article>

      <article>
        <form onSubmit={handleSendData}>
          <fieldset>
            <label>
              Marca:
              <input
                type="text"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
              />
            </label>
            <label>
              Modelo:
              <input
                type="text"
                name="modelo"
                value={formData.modelo}
                onChange={handleChange}
              />
            </label>

            <label>
              Data de Fabricação:
              <input
                type="text"
                name="dataFab"
                value={formData.dataFab}
                onChange={handleChange}
              />
            </label>

            <label>
              Data de Validade:
              <input
                type="text"
                name="dataVal"
                value={formData.dataVal}
                onChange={handleChange}
              />
            </label>

            <label>
              Dimensões:
              <input
                type="text"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
              />
            </label>

            <label>
              Peso (em libras):
              <input
                type="number"
                name="pound"
                value={formData.pound}
                onChange={handleChange}
              />
            </label>

            <label>
              Material:
              <input
                type="text"
                name="material"
                value={formData.material}
                onChange={handleChange}
              />
            </label>

            <label>
              Cor:
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
              />
            </label>

            <label>
              Capacidade:
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
              />
            </label>

            <label>
              Potência:
              <input
                type="number"
                name="potencity"
                value={formData.potencity}
                onChange={handleChange}
              />
            </label>

            <label>
              Funcionalidade:
              <input
                type="text"
                name="func"
                value={formData.func}
                onChange={handleChange}
              />
            </label>

            <label>
              Tipo de Embalagem:
              <input
                type="text"
                name="packaging.tipo"
                value={formData.packaging.tipo}
                onChange={handleChange}
              />
            </label>

            <label>
              Dimensões da Embalagem:
              <input
                type="text"
                name="packaging.dimensions"
                value={formData.packaging.dimensions}
                onChange={handleChange}
              />
            </label>

            <label>
              Peso da Embalagem (em libras):
              <input
                type="number"
                name="packaging.pound"
                value={formData.packaging.pound}
                onChange={handleChange}
              />
            </label>

            <label>
              Período de Garantia:
              <input
                type="text"
                name="guarantee.period"
                value={formData.guarantee.period}
                onChange={handleChange}
              />
            </label>

            <label>
              Detalhes da Garantia:
              <input
                type="text"
                name="guarantee.details"
                value={formData.guarantee.details}
                onChange={handleChange}
              />
            </label>

            <label>
              Fabricante:
              <input
                type="text"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Salvar</button>
          </fieldset>
        </form>
      </article>
      <article>
        {modelMessage && <span>{message}</span>}
      </article>
    </section>
  );
};

export default withAuth(NewDataSheet);
