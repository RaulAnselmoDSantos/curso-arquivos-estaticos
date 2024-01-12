import classNames from 'classnames';
import cardapio from '../itens.json'; 
import style from './Item.module.scss';

interface Props {
    cardapio : {
        title: string,
        description: string,
        photo:string,
        size: number,
        serving: number,
        price: number,
        id: number,
        category: {
          id: number,
          label: string
        }
      }
}

export default function Item({cardapio}: Props){
    
    return(
        <div className={classNames({
            [style.iten] : true
        })} >
            {`  
                ${cardapio.title},  
                ${cardapio.photo},


            `}
        </div>
    );
}