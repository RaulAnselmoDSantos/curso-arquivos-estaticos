import React from "react";
import {ReactComponent as Logo} from 'assets/logo.svg';
import style from './BarraInicial.module.scss';
import classNames from "classnames";
import { NavLink, Router } from "react-router-dom";

export default function BarraInicial(){

    return(
        <header className={style.barra} >
            <div className={style.barra__logo}>
            <Logo/>
            </div>
            
            <div className={classNames({
                [style.barra__opcoes]: true
            })} >
                
                <h3 className={style.barra__opcoes}>
                    <NavLink to="/">Cardapio </NavLink>
                </h3>
                <h3 className={style.barra__opcoes} >
                    <NavLink to="/recomandacao">Recomandação</NavLink>
                </h3>
            </div>
        </header>
    );
}