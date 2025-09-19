import Header from "@/components/Header";
import NavigationMenu from "@/components/NavigationMenu";
import PromotionBanner from "@/components/PromotionBanner";
import "./page.scss";
import SectionCompanies from "@/components/SectionCompanies";

export default function Home() {
  return (
    <>
      <PromotionBanner />

      <NavigationMenu />

      <Header />

      <div className="banner-purple">
        <div className="information-icon">
          <h1>
            80<span>%</span>
          </h1>
          <p>De redução de custo</p>
        </div>

        <div className="information-icon">
          <h1>
            70<span>%</span>
          </h1>
          <p>
            De aumento na <br />
            velocidade de produção
            <br />
          </p>
        </div>

        <div className="information-icon">
          <h1>13</h1>
          <p>Etapas de produto</p>
        </div>

        <div className="information-icon">
          <h1>
            Você <span>+ IA</span>
          </h1>
          <p>Valide tudo sem a necessidade de um time</p>
        </div>
      </div>

      <SectionCompanies />
    </>
  );
}
