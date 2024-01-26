import { MenuInicial } from 'components/MenuInicial';
import Cardapio from 'pages/Cardapio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Prato from 'pages/Prato/index';
import Recomendacao from 'pages/Recomendacao/Index';
import PaginaPadrao from 'pages/PaginaPadrao/index';
import Sobre from 'pages/Sobre';
import NotFound from 'pages/NotFound';
import Footer from 'pages/Footer';

export function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <MenuInicial/>
                <Routes>
                    <Route path='/' element={<PaginaPadrao/>}>
                        <Route path='cardapio' element={<Cardapio/>}/>
                        <Route index path='recomandacao' element={<Recomendacao/>} />
                        <Route  path='prato/:id' element={<Prato/>} />
                        <Route  path='sobre' element={<Sobre/>} />
                        
                    </Route>
                    <Route  path='*' element={<NotFound/>} />
                </Routes>
                <Footer/>
            </Router>
        </main>
    );
}