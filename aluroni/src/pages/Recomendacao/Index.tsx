import cardapio from "data/cardapio.json";
import style from './Inicio.module.scss';
import classNames from "classnames";
import { useState } from "react";
import Botao from "components/Botao";
import { Outlet } from "react-router-dom";
import stylesTema from 'styles/Tema.module.scss'

export default function Recomendacao(){
    let pratosRecomendados = [...cardapio]
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).slice(0, 3); 

    return (
        <section>
            <h5 className={stylesTema.titulo}>Recomendações da cozinha</h5> 
            <div className={style.recomendado}>
                {pratosRecomendados.map(item  => {  
                    return (
                        <div key={item.id} className={style.recomendados}>
                            <h3 className={style.recomendado__titulorecomendado}> {item.title} </h3>

                            <div className={style['recomendado__imagem']}>
                                <img src={item.photo} alt={item.title} />
                                    <Botao 
                                        texto={"Ver mais"}
                                    ></Botao>
                            </div>
                        </div>
                    );
                })}
            </div>
            
        </section>
    )
}