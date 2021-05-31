import React, {createContext, useContext} from "react";
import { ProductsContext } from "./context";
import styled from "styled-components";
import { Button } from "../button";

const ProductContainer = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
`;

const EachContainer = styled.div` 
    width: 25%;
    padding: 0 12px;
    margin: 20px 0;
    overflow: hidden;
    position: relative;
`;

const ProdImage = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 4px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const Detail = styled.div`
    padding: 15px 10px;
    text-align: center;
    background-color: white;
    border-left: 1px solid #FAFAFA;
    border-right: 1px solid #FAFAFA;
`;

const ProdName = styled.h6`
    font-size: 18px;
    font-weight: 500px;
    margin: 5px 0;
`;

const ProdPrice = styled.p`
    font-size: 20px;
    font-weight: 300;
    margin: 5px 0;

`;

const NewProd = styled.div`
    position: absolute;
    top: 0;
    background-color: greenyellow;
    padding: 5px 10px;
    color: black;
`;

const HotProd = styled.div`
    position: absolute;
    top: 0;
    background-color: orangered;
    padding: 5px 10px;
    color: black;
`;


export function Products() {

    const {products} = useContext(ProductsContext);
    
    return(
        <ProductContainer>
            {products.map((product) => (
                <EachContainer key={product.id}>
                    <ProdImage>
                        <img src={product.image} alt="not found" />
                    </ProdImage>
                    <Detail>
                        <ProdName>
                            {product.name}
                        </ProdName>
                        <ProdPrice>
                            Rs.{product.price}.00
                        </ProdPrice>
                    </Detail>
                    {product.staus == 'hot' ? <HotProd>Hot</HotProd>: ' '}
                    {product.staus == 'new' ? <NewProd>New</NewProd>: ' '}
                    <Button size={20} className="add-to-cart">
                        add to cart
                    </Button>
                </EachContainer>
            ))}
        </ProductContainer>
    );
}