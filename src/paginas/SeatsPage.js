import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../componentes/Footer";
import Form from "../componentes/Form";
import Seat from "../componentes/Seat";

export default function SeatsPage() {
    const [session, setSession] = useState([]);
    const { idSession } = useParams(0);
    const [reserved, setReserved] = useState([]);

    function reservar(seatId) {
        setReserved([...reserved, seatId])
        console.log(reserved)
    }

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`).then(resposta => setSession(resposta.data));
    }, [])

    if (session.length === 0) {
        return <p>carregando</p>;
    };

    return (
        <>
            <PageStyle>
                <h2>Selecione o(s) assento(s)</h2>
                <SectionSeat>

                    {session.seats.map(se =>
                        <Seat key={se.id} seatId={se.id} seatNum={se.name}
                            isAvailable={reserved.includes(se.id) ? undefined : se.isAvailable}
                            reservar={reservar} />)}

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
                <Form reserved={reserved}/>
                {/* <form onSubmit={sendReservation}>
                    <label htmlFor="nome">
                        Nome do comprador:<br />
                        <input id="nome"
                            type="text"
                            placeholder="Digite seu nome..." />
                    </label>
                    <label htmlFor="cpf">
                        CPF do comprador:<br />
                        <input id="cpf" type="cpf" placeholder="Digite seu CPF..." />
                    </label>
                    <input type="submit"
                        value="Reservar assento(s)"
                    />
                </form> */}
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
