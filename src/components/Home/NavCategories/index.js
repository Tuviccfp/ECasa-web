import styled from 'styled-components';

const Nav = styled.nav`
    border: 2px solid #ff5992;
    border-radius: 15px;
    width: 9%;
    margin-left: 10px;
    text-align: center;
`
const List = styled.ol`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export default function NavCategories({...categories}) {
    return (
        <Nav>
            <List>
                <li>{categories.categ1}</li>
                <li>{categories.categ2}</li>
                <li>{categories.categ3}</li>
                <li>{categories.categ4}</li>
                <li>{categories.categ5}</li>
                <li>{categories.categ6}</li>
                <li>{categories.categ7}</li>
                <li>{categories.categ8}</li>
                <li>{categories.categ9}</li>
                <li>{categories.categ10}</li>
            </List>
        </Nav>
    )
}