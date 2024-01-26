import { ReactComponent as NFImage } from 'assets/not_found.svg';
import style from './NotFound.module.scss';
import Botao from 'components/Botao';
import {useNavigate} from 'react-router-dom';


export default function NotFound(){
    const navegate = useNavigate();
    return(
        <div className={style.container}>
            <div className={style.voltar}>
                    <div onClick={() => {navegate(-1);}}>
                        <Botao  texto='< Voltar'  />               
                    </div>
            </div>
            <NFImage/>
            
        </div>
    )
}