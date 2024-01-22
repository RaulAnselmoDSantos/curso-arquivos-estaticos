import React from "react";
import {ReactComponent as Logo} from 'assets/logo.svg';
import style from './BarraInicial.module.scss';
import classNames from "classnames";


export function MenuInicial(){
    const rotas = [{
        label : 'Cardápio',
        to : '/cardapio'
    },{
        label : 'Recomandação',
        to : '/recomandacao'
    },{
        label : 'Descricao',
        to : '/descricao'
    }];
    return(
        
        <nav className={style.barra}>
        <Logo/>
            <ul className={style.barra__list}>
                {rotas.map((rota, index) => (
                    <li className={style.barra__list} key={index}>
                        <a href={rota.to}>
                            <h4> {rota.label} </h4>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

    );
}