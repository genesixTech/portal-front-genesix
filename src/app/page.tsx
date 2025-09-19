import Header from "@/components/Header";
import NavigationMenu from "@/components/NavigationMenu";
import PromotionBanner from "@/components/PromotionBanner";

export default function Home() {
  return (
    <>
      <PromotionBanner />

      <NavigationMenu />

      <Header />
    </>
  );
}
