import style from './Sobre.module.scss';

export default function Sobre() {
    return(
        <div className={style.sobreNos}> 

            <p className={style.sobreNos__texto}>

            </p>
            <div className={style.imagens} >
                <img className={style.imagens__imagem} src={''} />
            </div>
        </div>
    )
}