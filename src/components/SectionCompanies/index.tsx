import Image from "next/image";
import "./index.scss";
import IfoodLogo from "../../../public/ifood-logo.svg";
import GoogleLogo from "../../../public/google-logo.svg";
import ItauLogo from "../../../public/itau-logo.svg";
import VivoLogo from "../../../public/vivo-logo.svg";
import NubankLogo from "../../../public/nubank-logo.svg";
import MeliLogo from "../../../public/meli-logo.svg";
import SerasaLogo from "../../../public/serasa-logo.svg";
import MicrosoftLogo from "../../../public/microsoft-logo.svg";

const SectionCompanies = () => {
  return (
    <>
      <div className="section-companies">
        <div className="title">
          <p>CRIE COMO OS TIMES DAS GRANDES EMPRESAS</p>
        </div>

        <div className="section-logo">
          <Image className="logo-companies" src={IfoodLogo} alt="Ifood logo" />
          <Image
            className="logo-companies"
            src={GoogleLogo}
            alt="Google logo"
          />
          <Image className="logo-companies" src={ItauLogo} alt="Itau logo" />
          <Image className="logo-companies" src={VivoLogo} alt="Vivo logo" />
          <Image
            className="logo-companies nubank-logo"
            src={NubankLogo}
            alt="Nubank logo"
          />
          <Image className="logo-companies" src={MeliLogo} alt="Meli logo" />
          <Image
            className="logo-companies"
            src={SerasaLogo}
            alt="Serasa logo"
          />
          <Image
            className="logo-companies"
            src={MicrosoftLogo}
            alt="Microsoft logo"
          />
        </div>
      </div>
    </>
  );
};

export default SectionCompanies;
