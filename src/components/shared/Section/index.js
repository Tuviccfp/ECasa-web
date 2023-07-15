import React from "react";
import styled from 'styled-components';

const SectionStyle = styled.section`
    height: 99.8vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export default function Section({children}) {
    return ( 
        <SectionStyle>
            {children}
        </SectionStyle>
    )
}