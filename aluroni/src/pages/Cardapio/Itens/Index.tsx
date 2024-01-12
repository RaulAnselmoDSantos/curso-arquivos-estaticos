import cardapio from './itens.json';
import Item from './Item';
import classNames from 'classnames';
import style from './Itens.module.scss';

export default function Itens(){
    return(
        <div className={classNames({
            [style.itens] : true
        })}>
            { cardapio.map((item) => 
            (
                <Item key={item.id} cardapio={item}/>
            ))} 
                
        </div>
    );
}