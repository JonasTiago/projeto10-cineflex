import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../componentes/Footer";
import Form from "../componentes/Form";
import Seat from "../componentes/Seat";

export default function SeatsPage({ setSent }) {
    const [session, setSession] = useState([]);
    const [reserved, setReserved] = useState([]);
    const [seatNumb, setSeatNumb] = useState([]);
    const { idSession } = useParams(0);

    function reservar(seatId, seatNum) {
        setReserved(reserved.includes(seatId) ? reserved.filter(id => id !== seatId) :
            [...reserved, seatId]
            );
        setSeatNumb(seatNumb.includes(seatNum) ? seatNumb.filter( num => num !== seatNum):
            [...seatNumb, seatNum]);
    };

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`).then(resposta => setSession(resposta.data)).catch(resposta => console.log(resposta));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                            reservar={reservar} disabled={false}/>)}

                </SectionSeat>
                <Subtitle disabled>
                    <section>
                        <Seat seatNum={''} isAvailable={undefined} disabled={true}/>
                        <p>Selecionado</p>
                    </section>
                    <section>
                        <Seat seatNum={''} isAvailable={true} disabled={true}/>
                        <p>Disponivel</p>
                    </section><section>
                        <Seat seatNum={''} isAvailable={false} disabled={true}/>
                        <p>Indisponivel</p>
                    </section>
                </Subtitle>
                <Form reserved={reserved} setSent={setSent} seatNumb={seatNumb} session={session} />
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

    

`;

const SectionSeat = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    width: 327px;
    height:190px;
    margin:20px;

`;

const Subtitle = styled.section`
    display:flex;
    justify-content:space-between;
    width:60%;
    height:60px;
    margin:10px;

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
`;
