import BusinessSection from "./BusinessSection/BusinessSection";
import CTASection from "./CTASection/CTASection";
import FinanceSection from "./FinanceSection/FinanceSection";
import Hero from "./Hero/Hero";
import InventorySection from "./InventorySection/InventorySection";
import Manufacturing from "./Manufacturing/Manufacturing";
import PeoplePerformance from "./PeoplePerformance/PeoplePerformance";
import PurchaseModule from "./PurchaseModule/PurchaseModule";
import SalesOrder from "./SalesOrder/SalesOrder";
import SupportSection from "./SupportSection/SupportSection";
import TransformSection from "./TransformSection/TransformSection";
import WhyERPSection from "./WhyERPSection/WhyERPSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <BusinessSection />
      <InventorySection />
      <FinanceSection />
      <PeoplePerformance />
      <SalesOrder />
      <PurchaseModule />
      <Manufacturing />
      <CTASection />
      <WhyERPSection />
      <TransformSection />
      <SupportSection />
    </div>
  );
}
