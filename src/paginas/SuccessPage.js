import styled from "styled-components"

export default function SuccessPage() {
    return (
        <SuccessStyle>
            <h2>Pedido feito<br />
                com sucesso!</h2>
            <div>
                <h3>Filme e sessão</h3>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>
            <div>
                <h3>Ingressos</h3>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>
            <div>
                <h3>Comprador</h3>
                <p>Nome: {'nome'}</p>
                <p>CPF: {'numero'}</p>
            </div>
            <button>Voltar pra Home</button>
        </SuccessStyle>
    )
}

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
`