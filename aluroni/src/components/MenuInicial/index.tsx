import React from "react";
import {ReactComponent as Logo} from 'assets/logo.svg';
import style from './BarraInicial.module.scss';
import classNames from "classnames";
import {Link} from 'react-router-dom';
import { Outlet } from "react-router-dom";


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
        <main>
        <nav className={style.barra}>
        <Logo/>
            <ul className={style.barra__list}>
                {rotas.map((rota, index) => (
                    <li className={style.barra__list} key={index}>
                        <Link to={rota.to}>
                            <h4> {rota.label} </h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
       
            
        </main>
        
    );
}