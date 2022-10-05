import styled from "styled-components";

export default function Poster() {

    return (
        <Posters>
            <div>
                <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" />
            </div>
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