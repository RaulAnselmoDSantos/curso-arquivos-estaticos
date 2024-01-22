import cardapio from "data/cardapio.json";
import style from './Inicio.module.scss';
import classNames from "classnames";
import { useState } from "react";
import BarraInicial from "components/BarraInicial";
import Botao from "components/Botao";
import { text } from "stream/consumers";

export default function Inicio(){
    let pratosRecomendados = [...cardapio]
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).slice(0, 3); 
    const [isHoverd, setIsHoverd] = useState(false); 

    return (
        <section>
            <BarraInicial/>
            <h3 className={style.titulo}>Recomendações da cozinha</h3> 
            <div className={style.recomendados}>
                {pratosRecomendados.map(item  => {  
                    return (
                        
                        <div key={item.id} className={style.recomendados}>
                            <div className={style.titulo}>{item.title} </div>

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