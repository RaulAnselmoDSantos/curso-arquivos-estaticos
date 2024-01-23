import { Outlet } from "react-router-dom";
import style from '../../pages/PaginaPadrao/PaginaPadrao.module.scss';
import classNames from "classnames";
import stylesTema from 'styles/Tema.module.scss';



export default function PaginaPadrao(){
    return(
        <main>
         <header className={style.header}>
            <div className={style.header__text}>A casa do código e da massa</div>
        </header>
        <div className={stylesTema.container} >
            <Outlet/>
        
            <h3 className={stylesTema.titulo}>Nossa Casa</h3>
            <div className={style.footer} >
            
                <div className={style.footer__endereco}> 
                    Rua Vergueiro, 3185 <br/> <br/> Vila Mariana - SP
                </div>
            </div>
        </div>
        </main>
        
    )
}