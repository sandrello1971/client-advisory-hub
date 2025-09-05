import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TargetSegments from "@/components/TargetSegments";
import Method from "@/components/Method";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TargetSegments />
        <Method />
        <Resources />
      </main>
      <Footer />
    </>
  );
};

export default Index;
