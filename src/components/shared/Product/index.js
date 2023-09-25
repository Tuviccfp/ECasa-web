import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const List = styled.ul`
    border: 1px solid black;
    border-radius: 10px;
    list-style: none;
    padding: 20px;
    padding-inline-start: 20px;
    img { 
        width: 300px;
        height: 300px;
    }
    li {
        margin: 10px;
        text-aling: center;
    }
`

export default function Product({ item }) {
    return (
        <List>
            <center>
                <li>{item._id}</li>
                <li>{item.name}</li>
                <li>R$ {item.price}</li>
                <li><img src={item.img} alt={`foto do produto ${item.name}`}/></li>
                <li>{item.short_description}</li>
                {/* <li>{item.long_description}</li> */}
                <Link to={`/products/${item._id}`}>
                    <button>Acessar</button>
                </Link>
            </center>
        </List>
    )
}