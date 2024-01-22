import { MenuInicial } from 'components/MenuInicial';
import Cardapio from 'pages/Cardapio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Descricao from 'pages/Descricao/Index';
import Recomendacao from 'pages/Recomendacao/Index';
import PaginaPadrao from 'pages/PaginaPadrao/index';

export function AppRouter() {
    return (
        <main>
            <Router>
                <MenuInicial/>
                <Routes>
                    <Route path='/' element={<PaginaPadrao/>}>
                        <Route path='cardapio' element={<Cardapio/>}/>
                        <Route index path='recomandacao' element={<Recomendacao/>} />
                        <Route  path='descricaoa' element={<Descricao/>} />
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}