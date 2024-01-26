import { ReactComponent as NFImage } from 'assets/not_found.svg';
import style from './NotFound.module.scss';
import Botao from 'components/Botao';



export default function NotFound(){
    return(
        <div className={style.container}>
            <NFImage/>
            <div className={style.voltar}>
                    
                    <Botao texto='Voltar'/>               
            </div>
        </div>
    )
}