import { useState } from "react";
import styled from "styled-components"
import Poster from "./Poster";

export default function Main({ catalog }) {
    console.log(catalog)
    return (
        <Home>
            <h2>Selecione o filme</h2>
            <CatalogStyle>
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />

            </CatalogStyle>
        </Home>


    )
}

const Home = styled.div`
    width:90%;
    display:flex;
    margin: 110px auto 25px auto;
    flex-direction:column;

    h2{
        font-size:24px;
        text-align:center;
        color: #293845;
    }
`;

const CatalogStyle = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin: 30px 0px;
    
    
`;