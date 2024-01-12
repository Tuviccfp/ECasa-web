import * as React from 'react';
import './style.css'

export default function DataSheet({ item }) {
    return (
        <table className='table'>
            <tr>
                <th>Marca:</th>
                <td>{item.marca}</td>
            </tr>
            <tr>
                <th>Modelo:</th>
                <td>{item.modelo}</td>
            </tr>
            <tr>
                <th>Data de Fabricação:</th>
                <td>{item.dataFab}</td>
            </tr>
            <tr>
                <th>Data de validade:</th>
                <td>{item.dataVal}</td>
            </tr>
            <tr>
                <th>Dimensões:</th>
                <td>{item.dimensions}</td>
            </tr>
            <tr>
                <th>Peso</th>
                <td>{item.pound} kg</td>
            </tr>
            <tr>
                <th>Material do produto:</th>
                <td>{item.material}</td>
            </tr>
            <tr>
                <th>Cor:</th>
                <td>{item.color}</td>
            </tr>
            <tr>
                <th>Capacidade:</th>
                <td>{item.capacity}</td>
            </tr>
            <tr>
                <th>Potência:</th>
                <td>{item.potencity}</td>
            </tr>
            <tr>
                <th>Funcionalidades:</th>
                <td>{item.func}</td>
            </tr>
            <tr>
                <th>Pacote:</th>
                <td>{item.packaging.tipo}</td>
            </tr>
            <tr>
                <th>Dimensões do pacote:</th>
                <td>{item.packaging.dimensions}</td>
            </tr>
            <tr>
                <th>Peso do pacote:</th>
                <td>{item.packaging.pound}</td>
            </tr>
            <tr>
                <th>Tempo de garantia:</th>
                <td>{item.guarantee.period}</td>
            </tr>
            <tr>
                <th>Detalhes da garantia:</th>
                <td>{item.guarantee.details}</td>
            </tr>
        </table>
    )
}