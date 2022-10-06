import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../componentes/Footer";
import FreeTime from "../componentes/FreeTime";

export default function SessionPage() {
    const [date, setDate] = useState([]);
    const {idMovie} = useParams(1);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes`).then(resposta => 
        setDate(resposta.data));
    }, []);

    if(date.length === 0) {
		return <p>carregando</p>;
	}

    return (
        <>
            <Main>
                <h2>Selecione o horário</h2>
                <div>
                    {date && date.days.map( date => <FreeTime key={date.id} date={date} />)}
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