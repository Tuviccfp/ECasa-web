import Home from "./components/Home";
import NavMenu from "./components/Home/NavMenu";

function App() {
  const subSection = {
    sub1: "Início",
    sub2: "Produtos",
    sub3: "Carrinho",
    sub4: "Quem somos",
    sub5: "Contato",
    sub6: "Nosso APP",
    sub7: "Login"
  };


  return (
    <>
      <NavMenu subSection={subSection}/>
      <Home />
    </>
  );
}

export default App;
