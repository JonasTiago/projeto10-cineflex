import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Form({ reserved }) {
    const [form, setForm] = useState(
        {
            ids: [1],
            name: 'jonas',
            cpf: "156161321"
        }
    )

    

    function sendReservation(e) {
        e.preventDefault()
            const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many'
            const body = form
            axios.post(URL, body).then(resposta => console.log(resposta.data)).catch(resposta => console.log(resposta))
    }

    return (
        <FormStyle onSubmit={sendReservation}>
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
        </FormStyle>
    )
}

const FormStyle = styled.form`
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
            background-color:#FFFFFF;
            border:1px solid #D4D4D4;
            color:#000;
                font-family:roboto, sans-serif;
                padding:0 10px;
            &::placeholder {
                color: #AFAFAF;
                font-style:italic;
            }
        }
    }
    input{
        margin-top:35px;
        background-color:#E8833A;
        width:225px;
        height: 42px;
        font-size:18px;
        border:none;
        color:#fff;
        font-weight:400;
    }

`
