import React, { SetStateAction } from "react";
import style from './Buscador.module.scss';
import {CgSearch} from 'react-icons/cg';

interface Props{
    busca: string,
    setBusca: React.Dispatch<SetStateAction<string>>;
}

export default function Buscador({busca, setBusca }: Props) {
    return (
        <div className={style.buscador}>
            <input 
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
            />
            <CgSearch
                size = {20}
                color="#4C4DSE"
            />
        </div>
    )
}

 

