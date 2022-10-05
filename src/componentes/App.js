import { useState, useEffect } from "react";
import axios from 'axios'
import Header from "./Header";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogPage from "./CatalogPage";
import SessionPage from "./SessionPage";

export default function App() {
    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies').then(resposta => setCatalog(resposta.data))
    }

        , [])

    if (catalog.length === 0) {
        return <p>carregando</p>;
    }

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route  path="/" element={<CatalogPage catalog={catalog} />} />
                {/* <Route path="/" element={<SessionPage catalog={catalog} />} /> */}
            </Routes>
        </BrowserRouter>
    )
}