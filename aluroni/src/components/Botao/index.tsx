import { getValue } from '@testing-library/user-event/dist/utils';
import styles from './Botao.module.scss';


interface Props{
	texto: any
}

export default function Botao({texto}: Props){
	const nomeBotao = texto
	return(
		<button  className={styles.botao}>
			{nomeBotao}
		</button>
	);
}


