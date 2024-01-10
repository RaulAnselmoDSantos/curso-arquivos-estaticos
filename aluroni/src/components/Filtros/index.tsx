import filtros from './filtros.json'
import styles from './Filtros.module.scss'

type IOpcao = typeof filtros[0];


export default function Filtros() {
    function selectionarFiltro(opcao: IOpcao){
        console.log(opcao.label)
    }
    return(
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={styles.filtros__filtro} key={opcao.id} onClick={() => selectionarFiltro(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    );
}