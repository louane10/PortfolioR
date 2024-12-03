import "./app.scss"
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Accueil">
      <Navbar />
      <Hero />
    </section>
    <section>Parallax</section>
    <section>Services</section>
    <section id="A Propos">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
