import classNames from 'classnames';
import style from './Item.module.scss';
import { Pratos } from 'types/Pratos';
import TagsPrato from 'components/TagsPrato/TagsPrato';
import { useNavigate } from 'react-router-dom';



export default function Item(Props: Pratos) {
	const navigate = useNavigate();
	return (
		<section className={style.item} onClick={() => navigate(`/prato/${Props.id}`)}>
			<div className={style.item__imagem} >
				<img
					className={style.item__imagem}
					src={`${Props.photo}`}
					alt={`Imagem do Prato: ${Props.title}`}
					sizes={`${Props.size}`}
				/>
			</div>

			<div className={style.item__descricao}>
			<h2 className={style.item__titulo__h2}>{`${Props.title}`}</h2>
			<div className={style.item__titulo__p}>{`${Props.description}`}</div>
				<div className={style.item}>
					<TagsPrato {...Props}/> 
				</div>
			</div>
		</section>
	);
}
