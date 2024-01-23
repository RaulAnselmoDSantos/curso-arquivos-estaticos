import Buscador from 'components/Buscador';
import styles from './Cardapio.module.scss';
import { useState } from 'react';
import Filtros from 'components/Filtros';
import Ordenador from 'components/Carrinho/Ordenador';
import Itens from './Itens/Index';
import stylesTema from 'styles/Tema.module.scss';


export default function Cardapio() {
	const [busca, setBusca] = useState('');
	const [filtros, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState('');

	return (
		<main>
			<section className={styles.cardapio}>
				<h3 className={stylesTema.titulo}>Cardápio</h3>
				<Buscador busca={busca} setBusca={setBusca} />
				<div className={styles.cardapio__filtros}>
					<Filtros filtro={filtros} setFiltro={setFiltro} />
					<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
				</div>
				<Itens busca={busca} filtros={filtros} ordenador={ordenador} />
				<Itens busca={busca} filtros={filtros} ordenador={ordenador} />
			</section>
		</main>
	);
}
