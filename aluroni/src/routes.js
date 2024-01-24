import { MenuInicial } from 'components/MenuInicial';
import Cardapio from 'pages/Cardapio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Descricao from 'pages/Descricao/Index';
import Recomendacao from 'pages/Recomendacao/Index';
import PaginaPadrao from 'pages/PaginaPadrao/index';
import Sobre from 'pages/Sobre';
import NotFound from 'pages/NotFound';
import Footer from 'pages/Footer';

export function AppRouter() {
    return (
        <main>
            <Router>
                <MenuInicial/>
                <Routes>
                    <Route path='/' element={<PaginaPadrao/>}>
                        <Route path='cardapio' element={<Cardapio/>}/>
                        <Route index path='recomandacao' element={<Recomendacao/>} />
                        <Route  path='descricao' element={<Descricao/>} />
                        <Route  path='sobre' element={<Sobre/>} />
                        <Route  path='*' element={<NotFound/>} />
                    </Route>
                </Routes>
                <Footer/>
            </Router>
        </main>
    );
}