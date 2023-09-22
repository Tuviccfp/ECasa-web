import React, { useState, useEffect } from "react";
import Section from "../shared/Section";
import NavCategories from "./NavCategories";
import { getCategories } from "../../hooks/getCategorie";

export default function Home() {
  const [categories, setCategorie] = useState([]);
  
  async function fetchCategories() {
    try {
      const data = await getCategories();
      setCategorie(data)
    } catch (error) {
      setCategorie(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, []);

  console.log(categories)

  return (
    <Section style={{ height: '99.8vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      <NavCategories categories={categories} key={categories} />
    </Section>
  );
}
