import { User } from "lucide-react";
import Image from "next/image";
import Logo from "../../../public/logoGenesix.svg";
import "./index.scss";

const NavigationMenu = () => {
  return (
    <>
      <div className="navigationMenu">
        <Image className="logo-genesix-desktop" src={Logo} alt="Logo Genesix" />
        <div className="menu">
          <p>Início</p>
          <p>Planos</p>
          <p>Cases</p>
          <p>Blog</p>
        </div>
        <div className="section-login-menu">
          <p className="login">Login</p>
          <User className="icon-user" />
        </div>
      </div>
      <div className="section-logo-genesix-mobile">
        <Image className="logo-genesix-mobile" src={Logo} alt="" />
      </div>
    </>
  );
};

export default NavigationMenu;
