import { useState, useEffect } from "react";

import axios from 'axios'
import styled from "styled-components"
import Poster from "../componentes/Poster";

export default function CatalogPage() {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies').then(resposta => setCatalog(resposta.data));
    }, []);

    if (catalog.length === 0) {
        return <p>carregando</p>;
    };

    console.log(catalog);

    return (
        <Main>
            <h2>Selecione o filme</h2>
            <CatalogStyle>
                {catalog.map(movie =>
                        <Poster key={movie.id} urlMovie={movie.posterURL} idMovie={movie.id} />
                )}
            </CatalogStyle>
        </Main>


    );
};

const Main = styled.div`
    width:95%;
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