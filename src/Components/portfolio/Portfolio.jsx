import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Sophie Bluel, architecte d'intérieur",
    img: "/sophie.png",
    desc: "LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Atque perferendis hic autem beatae in tempora magnam ipsa velit, ipsum voluptas similique itaque quia? Molestiae nisi quas dolorem reiciendis hic temporibus.",
  },
  {
    id: 2,
    title: "Sophie Bluel, architecte d'intérieur",
    img: "/sophie.png",
    desc: "Création d'un site portfolio interactif en JavaScript. J'ai travaillé sur la page de présentation des projets, la connexion administrateur, et la fonctionnalité d’upload de médias.",
  },
  {
    id: 3,
    title: "Kasa, location immobilière entre particuliers",
    img: "/kasa.png",
      desc: "Application Web Responsive de location d'appartement complet en React. J'ai travaillé sur le design et l'ajout de composant, pour mettre en oeuvre un site avec une page de gestion d'erreur, un carrousel de présentation pour chaque card, et des animations avec Scss.",
  },
  {
    id: 4,
    title: "Mon Vieux Grimoire, site de notation de livres",
    img: "/Grimoire.jpeg",
    desc: "Conception du back-end d'une application permettant aux utilisateurs de noter des livres avec leur compte et de consulter les mieux notés.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="image des projets" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Voir</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Travaux Récents</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
