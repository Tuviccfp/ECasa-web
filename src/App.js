import Home from "./components/Home";
import NavApp from "./components/Home/NavApp";

function App() {
  const subSection = {
    sub1: "Início",
    sub2: "Produtos",
    sub3: "Carrinho",
    sub4: "Quem somos",
    sub5: "Contato",
    sub6: "Nosso APP",
  };


  return (
    <>
      <NavApp {...subSection}/>
      <Home />
    </>
  );
}

export default App;
