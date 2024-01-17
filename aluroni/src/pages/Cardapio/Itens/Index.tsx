import cardapio from "./itens.json";
import Item from "./Item";
import classNames from "classnames";
import style from "./Itens.module.scss";
import { useEffect, useState } from "react";

interface Props {
  busca: string;
  filtros: number | null;
  ordenador: string;
}

let ordem = true;

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtros, ordenador } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtros !== null) return filtros == id;
    return true;
  }

  function ordenar(novaLista: typeof cardapio) {
    
    switch (ordenador) {
      case "porcao":
        return novaLista.sort((a, b) => (a.size < b.size ? 1 : -1));
      case "qtd_pessoas":
        return novaLista.sort((a, b) => (a.serving < b.serving ? 1 : -1));
      case "preco":
        return novaLista.sort((a, b) => (a.price < b.price ? 1 : -1));
      default:
        return novaLista;
    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtros, ordenador]);

  return (
    <div className={style.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}