import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../componentes/Footer";
import Seat from "../componentes/Seat";

export default function SeatsPage() {

    const [session, setSession] = useState([])

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v5/cineflex/showtimes/1/seats").then(resposta => setSession(resposta.data))
    }, [])


    if (session.length === 0) {
        return <p>carregando</p>;
    };


    return (
        <>
            <PageStyle>
                <h2>Selecione o(s) assento(s)</h2>
                <SectionSeat>
                    {session.seats.map(se => <Seat key={se.id} seatNum={se.name} isAvailable={se.isAvailable} onClick={() => console.log(se.name)} />)}
                </SectionSeat>
                <Subtitle>
                    <section>
                        <Seat seatNum={''} isAvailable={true} />
                        <p>Selecionado</p>
                    </section>
                    <section>
                        <Seat seatNum={''} isAvailable={true} />
                        <p>Disponivel</p>
                    </section><section>
                        <Seat seatNum={''} isAvailable={false} />
                        <p>Indisponivel</p>
                    </section>
                </Subtitle>
                <form>
                    <label>
                        Nome do comprador:<br />
                        <input type="text" placeholder="Digite seu nome..." />
                    </label>
                    <label>
                        CPF do comprador:<br />
                        <input type="text" placeholder="Digite seu CPF..." />
                    </label>
                    <button>Reservar assento(s)</button>
                </form>
            </PageStyle>
            <Footer url={session.movie.posterURL}
                title={session.movie.title}
                date={`${session.day.weekday} - ${session.name}`} />
        </>
    );
};

const PageStyle = styled.div`
    display:flex;
    flex-direction:column;
    margin: 90px auto 25px auto;
    align-items:center;
    width:100%;
    height:80vh;

    h2{
        font-size:24px;
        text-align:center;
        color: #293845;
    }

    form{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin:10px;
        label{
            font-size:18px;
            font-family:roboto, sans-serif;
            margin:5px;
            color:#293845;
            input{
                width:337px;
                height:51px;
                margin-top:2px;
                margin-bottom:7px;
                font-size:18px;
                    font-family:roboto, sans-serif;
                    padding:0 10px;
                &::placeholder {
                    color: #AFAFAF;
                    font-style:italic;
                }
            }
        }
        button{
            margin-top:35px;
            background-color:#E8833A;
            width:225px;
            height: 42px;
            font-size:18px;
            border:none;
            color:#fff;
            font-weight:400;
        }
    }

`

const SectionSeat = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    width: 327px;
    height:190px;
    margin:20px;

`

const Subtitle = styled.section`
    display:flex;
    justify-content:space-between;
    width:60%;
    height:60px;
    margin:10px;
    
    section:nth-child(1){
        button{
            background-color:#1AAE9E;
            border:1px solid #0E7D71;
        }
    }

    section{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        position:relative;


        p{
            font-size:13px;
            position:absolute;
            top:40px
        }

    }
`
