import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cardapio from './pages/Cardapio';
import Botao from './components/Botao';
import 'normalize.css'; 
import Inicio from 'pages/Inicio/Index';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const componenteAtual = window.location.pathname === '/' ?  <Inicio/> : <Cardapio/>

root.render(
	<React.StrictMode>
		{componenteAtual}
	</React.StrictMode>,
	
);