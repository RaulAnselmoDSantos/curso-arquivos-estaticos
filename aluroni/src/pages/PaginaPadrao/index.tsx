import { Outlet } from "react-router-dom";
import style from '../../components/MenuInicial/BarraInicial.module.scss';

export default function PaginaPadrao(){
    return(
        <main>
         <header className={style.header}>
                 <div className={style.header__text}>A casa do código e da massa</div>
            </header>
         <Outlet/>
        </main>
        
    )
}