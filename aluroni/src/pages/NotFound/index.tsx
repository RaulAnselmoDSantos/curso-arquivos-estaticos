import { ReactComponent as NFImage } from "assets/not_found.svg";
import style from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navegate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.voltar}>
        <div
          onClick={() => {
            navegate(-1);
          }}
        >
          <button className={style.voltar__button}>{"< Voltar"}</button>
        </div>
      </div>
      <NFImage />
    </div>
  );
}
