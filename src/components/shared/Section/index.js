import React from "react";
import styled from 'styled-components';

const SectionStyle = styled.section`
`

export default function Section({children, style}) {
    return ( 
        <SectionStyle style={style}>
            {children}
        </SectionStyle>
    )
}