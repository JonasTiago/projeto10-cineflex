import Header from "./Header";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogPage from "../paginas/CatalogPage";
import SessionPage from "../paginas/SessionPage"
import SeatsPage from "../paginas/SeatsPage";

export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                {/* <Route  path="/" element={<CatalogPage />} /> */}
                {/* <Route path="/" element={<SessionPage />} /> */}
                <Route path="/" element={<SeatsPage />} />
                
            </Routes>
        </BrowserRouter>
    );
};