import { useState, useEffect } from "react";
import axios from 'axios'
import Main from "./Main";
import Header from "./Header";
import GlobalStyle from "./GlobalStyles";

export default function App() {
    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies').then(resposta => setCatalog(resposta.data))
    }

        , [])
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main catalog={catalog}/>
        </>
    )
}