import cardapio from "data/cardapio.json";
import style from './Inicio.module.scss';
import classNames from "classnames";
import { useState } from "react";

export default function Inicio(){
    let pratosRecomendados = [...cardapio]
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).slice(0, 3); 
    const [isHoverd, setIsHoverd] = useState(false); 

    return (
        <section>
            <h3 className={style.titulo}>Recomendações da cozinha</h3> 
            <div className={style.recomendados}>
                {pratosRecomendados.map(item  => {  
                    return (
                        <div key={item.id} className={style.recomendado}>
                            <div className={style.recomendado__imagem}>
                                <img src={item.photo} alt={item.title} />
                                    <button className={classNames({
                                    [style.recomendado__botao]: true   
                                })}>Ver mais</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}