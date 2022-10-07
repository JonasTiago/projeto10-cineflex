import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../componentes/Footer";
import Sessions from "../componentes/Sessions";

export default function SessionPage() {
    const [date, setDate] = useState([]);
    const {idMovie} = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`).then(resposta => 
        setDate(resposta.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(date.length === 0) {
		return <p>carregando</p>;
	}

    return (
        <>
            <Main>
                <h2>Selecione o horário</h2>
                <div>
                    {date && date.days.map( date => <Sessions key={date.id} date={date} />)}
                </div>
            </Main>
            <Footer url={date.posterURL} title={date.title} date={''}/>
        </>
    );
};

const Main = styled.div`
    width:90%;
    display:flex;
    margin: 100px auto 110px auto;
    flex-direction:column;

    h2{
        font-size:24px;
        text-align:center;
        color: #293845;
        margin-bottom:35px;
    }
`;