import style from "./Sobre.module.scss";
import stylesTema from "styles/Tema.module.scss";
import casa from 'pages/Sobre/sobre/casa.png';
import massa1 from 'pages/Sobre/sobre/massa1.png';
import massa2 from 'pages/Sobre/sobre/massa2.png';

const imagens = [massa1 , massa2];

export default function Sobre() {
    
  return (
    <section>
        <h3 className={stylesTema.titulo}>Sobre</h3><br/>
    <div className={style.sobreNos}>
      
        <img src={casa} alt={"Casa do Aluroni"} />
      
      <div className={style.sobreNos__texto}>
        <p>
          Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
          Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
          pelos ingredientes tradicionais da culinária Italiana, frescos e de
          excelente qualidade para que sua experiência seja ainda mais intensa!
        </p>
        <p>
          Também possuímos uma cardápio de carnes com muitas opções de acordo
          com o seu gosto!
        </p>
        <p>
          Para acompanhar as massas italianas, Aluroni possui uma reserva de
          vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
          carne ou massa!
        </p>
      </div>
      
    </div>
    <div className={style.imagens}>
        {imagens.map((imagens, index) => (
            <div key={index} className={style.imagens__imagem}>
                <img  src={imagens} alt="imagem de massa" />
            </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa Casa</h3>
            <div className={style.footer} >
            
                <div className={style.footer__endereco}> 
                    Rua Vergueiro, 3185 <br/> <br/> Vila Mariana - SP
                </div>
            </div>
    </section>
  );
}
