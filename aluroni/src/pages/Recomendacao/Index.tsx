import cardapio from "data/cardapio.json";
import style from './Inicio.module.scss';
import classNames from "classnames";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import stylesTema from 'styles/Tema.module.scss'
import { useNavigate } from "react-router-dom";

export default function Recomendacao(){
    let pratosRecomendados = [...cardapio]
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).slice(0, 3); 
    const navegate = useNavigate();

    function redirecionaParaDetalhes(prato: typeof cardapio[0]) {
        navegate(`/prato/${prato.id}`, {state: {...prato}});
    }

    return (
        <section>
        <div className={stylesTema.container}>
            <h5 className={stylesTema.titulo}>Recomendações da cozinha</h5> 
            <div className={style.recomendado}>
                {pratosRecomendados.map(item  => {  
                    return (
                        <div key={item.id} className={style.recomendados}>
                            <h3 className={style.recomendado__titulorecomendado}> {item.title} </h3>

                            <div className={style['recomendado__imagem']}>
                                <img src={item.photo} alt={item.title} />
                                <button
                                    className={style.recomendado__botao}
                                    onClick={() => redirecionaParaDetalhes(item)}  
                                >
                                    Ver mais
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div> 
        </div>
        </section>
        
    )
}