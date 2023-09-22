import { styled } from "styled-components"

const Nav = styled.nav`
    position: fixed;
    border-bottom: 1px solid black;
    width: 100vw;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: white;
`
const ListNav = styled.ul`
    display: flex;
    flex-direction: row;
    width: 35%;
    justify-content: space-around;
    list-style: none;
`
const ItemList = styled.li`
    margin-right: 0px;
`

export default function NavMenu({...subSection}) {
    return (
        <Nav>
            <p style={{border: '1px solid black', width: '58px', margin: '0'}}>Imagem Icone</p>
            <ListNav>
                <ItemList>{subSection.sub1}</ItemList>
                <ItemList>{subSection.sub2}</ItemList>
                <ItemList>{subSection.sub3}</ItemList>
                <ItemList>{subSection.sub4}</ItemList>
                <ItemList>{subSection.sub5}</ItemList>
                <ItemList>{subSection.sub6}</ItemList>
            </ListNav>
        </Nav>
    )
}