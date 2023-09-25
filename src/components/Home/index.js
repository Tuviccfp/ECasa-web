import React, { useState, useEffect } from "react";
import Section from "../shared/Section";
import NavCategories from "./NavCategories";
import { getCategories } from "../../hooks/getCategorie";
import { getProducts } from "../../hooks/getProduct";
import Product from "../shared/Product";
import './style.css'

export default function Home() {
  const [categories, setCategorie] = useState([]);
  const [product, setProduct] = useState();

  async function fetchCategories() {
    try {
      const data = await getCategories();
      setCategorie(data)
    } catch (error) {
      setCategorie(error)
    }
  }

  async function fetchProducts() {
    try {
      const dataProduct = await getProducts();
      setProduct(dataProduct)
    } catch (error) {
      setProduct(error)
    }
  }
  
  useEffect(() => {
    fetchCategories()
    fetchProducts()
  }, []);

  console.log(product)

  if(product === undefined) {
    return null;
  }
  return (
    <Section style={{ height: '99.8vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      <NavCategories categories={categories} key={categories} />
      <article>
        {product.searchProduct && product.searchProduct.length > 0 ? (
          <div>
            {product.searchProduct.map((item, index) => (
              <div key={index}>
                <Product item={item}/>
              </div>
            ))}
          </div>
        ) : (
          <p>Carregando a lista de produtos...</p>
        )}
      </article>
    </Section>
  );
}
