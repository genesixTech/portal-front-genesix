import Image from "next/image";
import painelHeader from "../../../public/painelHeader.svg";
import "./index.scss";

const Header = () => {
  return (
    <>
      <div className="section-header">
        <div>
          <p>
            E ele disse: “que hajam produtos! E o produto foi criado...”
            (GenesiX 1:3-5)
          </p>
          <h1>
            Crie produtos digitais validados de forma profissional{" "}
            <span>do zero ao MVP</span> em tempo recorde e com baixíssimo custo
          </h1>
          <p>
            Um time completo de agentes de IA treinados com você no comando,
            para fazer a sua ideia sair do papel e entrar no mercado.
          </p>
        </div>
        <Image className="painel-header" src={painelHeader} alt="" />
      </div>
    </>
  );
};

export default Header;
