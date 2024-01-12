import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { getCategorieID } from "../../hooks/getCategorieID";
import Product from "../shared/Product";
import "./style.css";
import NavMenu from "../Home/NavMenu";

function FormNewSubCategory() {
  return (
    <form>
      <fieldset>
        <legend>Criar uma nova Sub Categoria</legend>
        <p>
          <label>Nome</label>
          <input
            type="text"
            name=""
            placeholder="Digite o nome da subcategoria"
          />
          <input type="submit" value="Salvar" />
        </p>
      </fieldset>
    </form>
  );
}

export default function CategoriesID() {
  const [dataID, setDataID] = React.useState();
  const [newSubCategory, setNewSubCategory] = React.useState(false);
  const { id } = useParams();

  async function fetchCategoriesID() {
    try {
      const data = await getCategorieID(id);
      setDataID(data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchCategoriesID();
  }, [id]);

  console.log(dataID)
  //   const handleClick = () => {};

  const searchCategoriesID = () => {
    if (dataID === undefined) {
      return null;
    } else {
      return (
        <section className="nav-store">
         
            <h4>{dataID.searchCategoriesID.name}</h4>
            <div className="model-new-subcategory">
              <button onClick={() => setNewSubCategory(!newSubCategory)}>
                Nova Sub Categoria
              </button>
              {newSubCategory && <FormNewSubCategory />}
            </div>

            <article className="nav-subcategory">
              <nav>
                {dataID.responseSubCategory &&
                dataID.responseSubCategory.length > 0 ? (
                  <span className="model-subcategory">
                    {dataID.responseSubCategory.map((item, index) => (
                      <div key={index}>
                        <p style={{ display: "none" }}>{item._id}</p>
                        <Link to={`/category/get-sub-categorys/${item._id}`}>
                            <p>{item.name}</p>
                        </Link>
                      </div>
                    ))}
                  </span>
                ) : (
                  <p>Carregando Sub Categorias</p>
                )}
              </nav>

              <div className="model-new-product">
                {dataID.responseProduct && dataID.responseProduct.length > 0 ? (
                  <span className="model-screen-products">
                    {dataID.responseProduct.map((item, index) => (
                      <div key={index}>
                        <Product item={item}/>
                      </div>
                    ))}
                    <Product item={dataID.responseProduct[0]} />
                  </span>
                ) : (
                  <p>Carregando dados do produto...</p>
                )}
              </div>
            </article>
        </section>
      );
    }
  };

  const subSection = {
    sub1: "Início",
    sub2: "Produtos",
    sub3: "Carrinho",
    sub4: "Quem somos",
    sub5: "Contato",
    sub6: "Nosso APP",
  };

  return (
    <section>
      {/* <NavMenu subSection={subSection} /> */}
      <h4>{dataID.searchCategoriesID.name}</h4>
            <div className="model-new-subcategory">
              <button onClick={() => setNewSubCategory(!newSubCategory)}>
                Nova Sub Categoria
              </button>
              {newSubCategory && <FormNewSubCategory />}
            </div>

      {/* <article>

      </article> */}

      <article>
        {searchCategoriesID()}
      </article>
    </section>
  );
}
