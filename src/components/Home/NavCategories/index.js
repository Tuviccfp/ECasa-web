import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  border: 2px solid #ff5992;
  border-radius: 15px;
  width: 20%;
  margin-left: 10px;
  padding: 15px;
  margin-top: 15px;
`;
const List = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & li {
    margin-bottom: 5px;
  }
`;

export default function NavCategories({categories}) {
  return (
    <Nav>
      <List>
        {/* Percorro toda a minha propriedade e passo os dados necessários a serem capturados */}
        {categories.map((category) => (
          <Link to={`/categories/${category._id}`} key={category._id}>
            <li style={{ cursor: "pointer" }}>{category.name}</li>
          </Link>
        ))}
      </List>
    </Nav>
  );
}
