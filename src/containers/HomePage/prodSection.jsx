import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";

import { Specialist } from "../../components/speciaList";
import { Products } from "../../components/products";

const Container = styled.div`
    width: 100%;
    padding: 0 100px;
`;

export function ProdSection(props) {
    return (
        <Specialist>
            <Container/>
            <Products />
        </Specialist>
    );
}