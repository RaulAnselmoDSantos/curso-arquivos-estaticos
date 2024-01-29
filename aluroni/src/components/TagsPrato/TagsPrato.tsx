import {Pratos} from 'types/Pratos';
import style from './TagsPrato.module.scss';
import classNames from 'classnames';



export default function TagsPrato( {
    description,
    category,
    size,
    serving,
    price
    
}:Pratos){
    return (
    <>
				<div className={style.item__qtdpessoas}>
          Serve até {`${serving}`} pessoa{serving === 1 ? '' : 's'}.
				</div>
				<div className={style.item__porcao}> {`${size}`} g </div>
				<div className={style.item__valor}>
          R$ {`${price.toFixed(2)}`}
				</div>
				<div className={style.item__tags}>
					<div
						className={classNames({
							[style.item__tipo]: true,
							[style[`item__tipo__${category.label.toLowerCase()}`]]:
                true,
						})}
					>
						{category.label}
					</div>
				</div>
    </>    
    )
}