import { Outlet, useNavigate, useLocation } from "react-router-dom";
import style from "../../pages/PaginaPadrao/PaginaPadrao.module.scss";
import classNames from "classnames";
import stylesTema from "styles/Tema.module.scss";
import { ReactNode } from "react";

export default function PaginaPadrao({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <main>
      <header className={style.header}>
        <div className={style.header__text}>A casa do código e da massa</div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </main>
  );
}
