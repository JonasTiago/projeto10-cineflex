import styled from "styled-components"
import Poster from "./Poster";

export default function CatalogPage({ catalog }) {
    
    return (
        <Main>
            <h2>Selecione o filme</h2>
            <CatalogStyle>
                {catalog.map(movie => <Poster urlMovie={movie.posterURL} key={movie.id}/>)}
            </CatalogStyle>
        </Main>


    )
}

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