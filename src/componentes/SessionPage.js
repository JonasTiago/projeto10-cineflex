import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import FreeTime from "./FreeTime";

export default function SessionPage() {

    const [date, setDate] = useState([])

    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes').then(resposta => 
        setDate(resposta.data))
    }

        , [])

    if(date.length === 0) {
		return <p>carregando</p>;
	}

    return (
        <>
            <Main>
                <h2>Selecione o horário</h2>
                <div>
                    {date && date.days.map( date => <FreeTime key={date.id} date={date} />)}
                    {/* <FreeTime date={date.days}/> */}
                </div>
            </Main>
            <Footer date={date}/>
        </>
    )
}

const Main = styled.div`
    width:90%;
    display:flex;
    margin: 100px auto 25px auto;
    flex-direction:column;

    h2{
        font-size:24px;
        text-align:center;
        color: #293845;
        margin-bottom:35px;
    }
`;