import React from "react";
import {ReactComponent as Logo} from 'assets/logo.svg';
import style from './BarraInicial.module.scss';
import classNames from "classnames";
import { NavLink, Router } from "react-router-dom";


export function MenuInicial(){

    return(
        <header className={style.barra} >

            <div className={style.barra__logo}>
            <Logo/>
            </div>
            
            <div className={classNames({
                [style.barra__opcoes]: true
            })} >
                
                <h4 className={style.barra__opcoes}>
                    <NavLink to="/">Cardapio </NavLink>
                </h4>
                <h4 className={style.barra__opcoes} >
                    <NavLink to="/recomandacao">Recomendação</NavLink>
                </h4>
                <h4 className={style.barra__opcoes} >
                    <NavLink to="/descricao">Sobre</NavLink>
                </h4>
            </div>
        </header>
    );
}