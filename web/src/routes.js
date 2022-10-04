import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/register";
import Listar from "./pages/Listar/list"
import Games from "./pages/Games/games";
import Editar from "./pages/Editar/editar";
import Login from "./pages/Login/login";


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/auth" element={<Login />} />
                <Route path="/list" element={<Listar />} />
                <Route path="/games" element={<Games />} />
                <Route path={"/games/:id"} element={<Editar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;