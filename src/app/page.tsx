import Hero from "./components/Hero";
import Promotion from "./components/Promotion";
import Services from "./components/Services";
import Categories from "./components/Categories"



export default function Home() {
  return (
    <div className="bg-myColor4">
      <Hero/>
      <Services/>
      <Promotion/>      
      <Categories/>
    </div>
  );
}
