import style from "./Prato.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import cardapio from "data/cardapio.json";
import TagsPrato from "components/TagsPrato/TagsPrato";
import NotFound from "pages/NotFound";
import PaginaPadrao from "pages/PaginaPadrao";

export default function Prato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find((item) => item.id === Number(id));
  if (!prato) {
    return <NotFound />;
  }
  return (
    <PaginaPadrao>
      <button className={style.voltar} onClick={() => navigate(-1)}>
        {`< voltar`}
      </button>
      <section className={style.container}>
        <h1 className={style.titulo}>{prato.title}</h1>
        <div className={style.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div
          className={style.conteudo__descricao}
        >{`${prato.description}`}</div>
        <TagsPrato {...prato} />
      </section>
    </PaginaPadrao>
  );
}
