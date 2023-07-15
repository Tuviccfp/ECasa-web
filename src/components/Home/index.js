import React, { useState, useEffect } from "react";
import axios from "axios";
import Section from "../shared/Section";
import NavApp from "./NavApp";
import NavCategories from "./NavCategories";

export default function Home() {
  const [categories, setCategorie] = useState([]);

//   const getCategories = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/categories");
//       setCategorie(response.data);
//     } catch (error) {
//       setCategorie("Erro ao resgatar as categorias");
//     }
//   };

  useEffect(() => {
    axios.get("http://localhost:8080/categories").then((response) => {
      setCategorie(response.data);
    });
  }, []);


  return (
    <Section>
      <NavCategories categories={categories} key={categories} />

    </Section>
  );
}
