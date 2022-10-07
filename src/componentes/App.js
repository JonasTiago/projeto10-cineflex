import Header from "./Header";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogPage from "../paginas/CatalogPage";
import SessionPage from "../paginas/SessionPage"
import SeatsPage from "../paginas/SeatsPage";
import SuccessPage from "../paginas/SuccessPage";
import { useState } from "react";

export default function App() {
const [sent, setSent] =  useState()

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route  path="/" element={<CatalogPage />} />
                <Route path="/sessoes/:idMovie" element={<SessionPage />} />
                <Route path="/assentos/:idSession" element={<SeatsPage setSent={setSent}/>} />
                <Route path="/sucesso" element={<SuccessPage sent={sent}/>} />
            </Routes>
        </BrowserRouter>
    );
};