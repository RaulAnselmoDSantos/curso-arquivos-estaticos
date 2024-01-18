import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cardapio from './pages/Cardapio';
import Botao from './components/Botao';
import 'normalize.css'; 
import Inicio from 'pages/Inicio/Index';
import { Router } from 'react-router-dom';
import { AppRouter } from 'routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const componenteAtual = window.location.pathname === '/' ?  <Inicio/> : <Cardapio/>

root.render(
	<React.StrictMode>
		<AppRouter/>
	</React.StrictMode>,
	
);