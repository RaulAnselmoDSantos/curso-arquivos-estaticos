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
        <section className={classNames({ [style.item]: true })}> 
                <h2 className={classNames({
                    [style.item__titulo] : true
                })}>{`${cardapio.title}`}
                    
                </h2>

                <img className={classNames({
                        [style.item__imagem] : true
                })}  src={`${cardapio.photo}`} alt={`Imagem do Prato: ${cardapio.title}`}  sizes={`${cardapio.size}`}   /> 
                
                <h5 className={classNames({
                        [style.item__descricao] : true
                })}>
                    <p>{`${cardapio.description}`}</p> 
                </h5>
                
                <p className={classNames({
                        [style.item__valor] : true
                })} >R$ {`${cardapio.price}`}, 00</p> 
                <p className={classNames({
                        [style.item__qtdpessoas] : true
                })} >Serve até  {`${cardapio.serving}`} pessoas.</p>
                
                <div className={classNames({
                        [style.item__tipo] : true
                })}> 
                        <p className={classNames({
                            [style.item__tipo__label] : true
                    })} >{`${cardapio.category.label}`}</p> 
                    
                </div>
        </section>
    );
}