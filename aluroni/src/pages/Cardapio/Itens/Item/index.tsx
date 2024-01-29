import classNames from 'classnames';
import style from './Item.module.scss';
import { Prato } from 'types/Prato';



export default function Item(Props: Prato) {
	function idCategoria(categoria: number) {
		if (categoria === 1) {
			return style.tags__massas;
		}
	}

	return (
		<section className={style.item}>
			<div className={style.item__imagem}>
				<img
					className={style.item__imagem}
					src={`${Props.photo}`}
					alt={`Imagem do Prato: ${Props.title}`}
					sizes={`${Props.size}`}
				/>
			</div>

			<div className={style.item__descricao}>
				<h2 className={style.item__titulo}>{`${Props.title}`}</h2>
				<div className={style.item__descricao}>{`${Props.description}`}</div>
				<div className={style.item__qtdpessoas}>
          Serve até {`${Props.serving}`} pessoa{Props.serving === 1 ? '' : 's'}.
				</div>
				<div className={style.item__porcao}> {`${Props.size}`} g </div>
				<div className={style.item__valor}>
          R$ {`${Props.price.toFixed(2)}`}
				</div>
				<div className={style.item__tags}>
					<div
						className={classNames({
							[style.item__tipo]: true,
							[style[`item__tipo__${Props.category.label.toLowerCase()}`]]:
                true,
						})}
					>
						{Props.category.label}
					</div>
				</div>
        
			</div>
		</section>
	);
}
