import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listar from "./pages/Listar/list"
import Games from "./pages/Games/games";


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Listar />} />
                <Route path="/games" element={<Games />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;