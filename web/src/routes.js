import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listar from "./pages/Listar/list"
function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Listar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;