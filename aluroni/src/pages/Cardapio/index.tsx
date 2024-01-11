import Buscador from 'components/Buscador';
import styles from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import { useState } from 'react';
import Filtros from 'components/Filtros';
import Ordenador from 'components/Carrinho/Ordenador';

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtros, setFiltro] = useState<number | null>(null); 
    const [ordenador, setOrdenador] = useState("");

    return(
    
        <main>
            
            <nav className={styles.menu}>
                <Logo/>
            </nav>
           <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
           </header>
           <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador 
                busca={busca} 
                setBusca={setBusca} />
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtros} setFiltro={setFiltro} />
                    <Ordenador   ordenador={ordenador} setOrdenador={setOrdenador}/>
                </div>
                
           </section>
        </main>
        
    )
}