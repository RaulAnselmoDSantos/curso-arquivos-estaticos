import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio/Index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Inicio/>} />
                <Route path='/cardapio' element={<Cardapio/>} />
            </Routes>
        </Router>
    );
}