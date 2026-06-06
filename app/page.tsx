import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Programs from "./components/sections/Programs";
import About from "./components/sections/About";
import Pillars from "./components/sections/Pillars";
import Contact from "./components/sections/Contact";
import ScrollToTop from "./components/ui/ScrollToTop";
import "./home.css";

export default function Home() {
  return (
    <main className="page">
      <Header />
      <Hero />
      <Stats />
      <Programs />
      <About />
      <Pillars />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
