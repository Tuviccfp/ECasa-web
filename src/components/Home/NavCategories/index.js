import styled from "styled-components";

const Nav = styled.nav`
  border: 2px solid #ff5992;
  border-radius: 15px;
  width: 20%;
  margin-left: 10px;
  text-align: center;
`;
const List = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function NavCategories({categories}) {
  return (
    <Nav>
      <List>
        {/* Percorro toda a minha propriedade e passo os dados necessários a serem capturados */}
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </List>
    </Nav>
  );
}
