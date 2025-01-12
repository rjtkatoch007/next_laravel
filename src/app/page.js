import Image from "next/image";
import TopNav from "./components/Header/TopNav/TopNav";
import Menu from "./components/Header/Menu/Menu";
import Slider from "./components/Slider/Slider";
import Service from "./components/Service/Service";

export default function Home() {
  return (
   <div className="overflow-x-hidden">
    <header id="header">
      <TopNav/>
      <Menu/>
    </header>
    <main className="content">
        <Slider/>
        <Service/>
      </main>

   </div>
  );
}
