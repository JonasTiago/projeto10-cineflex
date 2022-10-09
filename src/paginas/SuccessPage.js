import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SuccessPage({ sent }) {
    const { name, cpf, seats, session } = sent

    return (
        <SuccessStyle>
            <h2>Pedido feito<br />
                com sucesso!</h2>
            <div>
                <h3>Filme e sessão</h3>
                <p data-identifier="movie-session-infos-reserve-finished">{session.movie.title}</p>
                <p data-identifier="movie-session-infos-reserve-finished">{session.day.date} - {session.name}</p>
            </div>
            <div>
                <h3>Ingressos</h3>
                {seats.map((id, indx) => <p key={indx} data-identifier="seat-infos-reserve-finished">Assento {id}</p>)}
            </div>
            <div>
                <h3>Comprador</h3>
                <p data-identifier="buyer-infos-reserve-finished">Nome: {name}</p>
                <p data-identifier="buyer-infos-reserve-finished">CPF: {cpf}</p>
            </div>
            <Link to={"/"}>
                <button data-identifier="back-to-home-btn">Voltar pra Home</button>
            </Link>
        </SuccessStyle>
    );
};

const SuccessStyle = styled.div`
    margin-top:120px;
    margin-bottom:50px;
    display:flex;
    flex-direction:column;
    height: 85vh;

    h2{
        text-align:center;
        font-size:24px;
        color:#247A6B;
    }

    div{
        margin: 30px 35px  25px 35px;

        h3{
            font-size:24px;
            font-weight:700;
            font-family:roboto, sans-serif;
            margin:10px 0;

        }

        p{
            font-size:22px;
            font-weight:400;
            font-family:roboto, sans-serif;
            margin-bottom:3px;

        }
    }

    a{
        margin:auto;
    }
    
    button{
            margin:30px auto 35px auto;
            background-color:#E8833A;
            width:225px;
            min-height: 42px;
            font-size:18px;
            border:none;
            color:#fff;
            font-weight:400;
        
    }
`;
