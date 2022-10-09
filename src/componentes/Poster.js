import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Poster({ urlMovie, idMovie }) {

    return (
        <Posters>
            <Link to={`/sessoes/${idMovie}`} >
                <div data-identifier="movie-outdoor">
                    <img src={urlMovie} alt='poster movie'/>
                </div>
            </Link>
        </Posters>
    );
};

const Posters = styled.div`
    margin:auto;

    div{
        margin:10px;
        box-shadow:0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius:3px;
        width: 145px;
        height: 209px;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    img{
        width: 129px;
        height: 193px;
    }
`;