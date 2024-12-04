import "./services.scss";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      straggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      id="skills"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <motion.div className="textContainer1" variants={variants}>
                <hr />
                <p>
                  Des bases solides et une envie <br />
                  constante d'apprendre !
                </p>
              </motion.div>
              <motion.div className="titleContainer" variants={variants}>
                <h1 className="title">
                  Mes
                  <motion.b whileHover={{ color: "#cac1ed" }}>
                    Compétences.
                  </motion.b>
                </h1>
              </motion.div>
              <p className="p1">
                Je m'appelle <b>Louane</b>, développeuse Web junior de 20 ans.{" "}
                <br />
                Depuis le confinement, j’ai découvert une passion pour le code
                et la <b> résolution de problèmes techniques.</b> <br />
                Cette année, j'ai pu me plonger sérieusement dans le
                développement, fraîchement diplômée d'une formation{" "}
                <b>OpenClassrooms.</b> <br />
                Aujourd’hui, je suis prête à apprendre encore plus en intégrant
                une équipe !<br></br>
                <br></br>
                Avec une <b>formation en art et un esprit curieux</b>, j’aime
                allier
                <b> créativité et rigueur</b> pour concevoir des projets à la
                fois esthétiques et fonctionnels. <br />{" "}
                <b>Persévérante et patiente</b>, je ne recule devant aucun défi
                technique et m’engage toujours à <b>trouver une solution</b>,
                peu importe le temps que cela prend.
              </p>
              <motion.div>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                  variants={variants}
                >
                  <motion.div
                    className="item"
                    whileHover={{ color: "#B8C394" }}
                  >
                    <img src="/public/meter1.svg" alt="Image" />
                    <h5>Html CSS</h5>
                  </motion.div>
                  <motion.div
                    className="item"
                    whileHover={{ color: "#B8C394" }}
                  >
                    <img src="/public/meter1.svg" alt="Image" />
                    <h5>JavaScript</h5>
                  </motion.div>
                  <motion.div
                    className="item"
                    whileHover={{ color: "#B8C394" }}
                  >
                    <img src="/public/meter1.svg" alt="Image" />
                    <h5>React</h5>
                  </motion.div>
                  <motion.div
                    className="item"
                    whileHover={{ color: "#B8C394" }}
                  >
                    <img src="/public/meter1.svg" alt="Image" />
                    <h5>SEO</h5>
                  </motion.div>
                  <motion.div
                    className="item"
                    whileHover={{ color: "#B8C394" }}
                  >
                    <img src="/public/meter1.svg" alt="Image" />
                    <h5>Git</h5>
                  </motion.div>
                  <motion.div
                    className="item"
                    whileHover={{ color: "#B8C394" }}
                  >
                    <img src="/public/meter1.svg" alt="Image" />
                    <h5>Méthode Agile</h5>
                  </motion.div>
                </Carousel>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Services;
