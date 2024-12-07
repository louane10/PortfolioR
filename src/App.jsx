import "./app.scss";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/cursor/Cursor";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Parallax from "./Components/parallax/Parallax";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor/>
      <section id="Accueil">
        <Navbar />
        <Hero />
      </section>
      <section id="A Propos">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Mes Projets">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
