import { MenuInicial } from 'components/MenuInicial';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio/Index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Descricao from 'pages/Descricao/Index';

export function AppRouter() {
    return (
        
        <Router>
            <MenuInicial/>
            <Routes>
                <Route path='/cardapio' element={<Cardapio/>}/>
                <Route path='/recomandacao' element={<Inicio/>} />
                <Route path='/descricao' element={<Descricao/>} />
            </Routes>
        </Router>
    );
}