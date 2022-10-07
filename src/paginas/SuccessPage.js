import styled from "styled-components";

export default function SuccessPage({ sent }) {
    const session = sent.session;
    return (
        <SuccessStyle>
            <h2>Pedido feito<br />
                com sucesso!</h2>
            <div>
                <h3>Filme e sessão</h3>
                <p>{session.movie.title}</p>
                <p>{session.day.date} - {session.name}</p>
            </div>
            <div>
                <h3>Ingressos</h3>
                {sent.seats.map((id, indx) => <p key={indx}>Assento {id}</p>)}
            </div>
            <div>
                <h3>Comprador</h3>
                <p>Nome: {sent.name}</p>
                <p>CPF: {sent.cpf}</p>
            </div>
            <button>Voltar pra Home</button>
        </SuccessStyle>
    );
};

const SuccessStyle = styled.div`
    margin-top:120px;
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

    button{
            margin:30px auto 25px auto;
            background-color:#E8833A;
            width:225px;
            height: 42px;
            font-size:18px;
            border:none;
            color:#fff;
            font-weight:400;
        
    }
`;