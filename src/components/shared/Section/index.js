import React from "react";
import styled from 'styled-components';

const SectionStyle = styled.section`

`

export default function Section({children}) {
    return ( 
        <SectionStyle>
            {children}
        </SectionStyle>
    )
}