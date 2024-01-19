import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'normalize.css'; 
import { AppRouter } from 'routes';
import BarraInicial from 'components/BarraInicial';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<AppRouter/>
	</React.StrictMode>,
	
);