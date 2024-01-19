import BarraInicial from 'components/BarraInicial';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio/Index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Cardapio/>} />
                <Route path='/recomandacao' element={<Inicio/>} />
                {/* <Route path='/barra' element={<BarraInicial/>} /> */}
            </Routes>
        </Router>
    );
}