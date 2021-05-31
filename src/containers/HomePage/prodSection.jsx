import React from "react";
import styled from "styled-components";

import { Specialist } from "../../components/speciaList";
import { Products } from "../../components/products";

const Container = styled.div`
    width: 100%;
    padding: 0 100px;
`;

export function ProdSection(props) {
    return (
        <Specialist>
            <Container>
                <Products />
            </Container>
        </Specialist>
    );
}