import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeStyle } from "../css/HomeStyle";
import { FaSolarPanel, FaSun } from "react-icons/fa";
import { GiEcology } from "react-icons/gi";
import Painel3 from "../assets/images/painel3.jpg";
import Painel4 from "../assets/images/painel4.jpg";
import Painel5 from "../assets/images/painel5.jpg";
import Painel6 from "../assets/images/painel6.jpg";

const Home = () => {
  const images = [Painel3, Painel4, Painel5, Painel6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) =>
    setCurrentIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % images.length
        : (prevIndex - 1 + images.length) % images.length
    );

  return (
    <HomeStyle>
      <section>
        <div className="slideshow-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            >
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
          <button className="prev" onClick={() => changeSlide("prev")}>
            ❮
          </button>
          <button className="next" onClick={() => changeSlide("next")}>
            ❯
          </button>
        </div>

        <div className="informacoes">
          <h3>Venha Conhecer</h3>
          <p>
            Você sabia que os painéis solares podem reduzir até 95% da sua conta
            de energia e ainda ajudam a preservar o meio ambiente? Quer saber
            mais? Descubra como a energia solar pode transformar seu dia a dia e
            o planeta!
          </p>
          <hr />
          <ul className="items">
            <li>
              <FaSolarPanel className="icon-home" />
              <h4>Painéis Solares</h4>
              <p>
                Captam luz solar para gerar eletricidade, ajudando a economizar
                e reduzir impactos ambientais.
              </p>
            </li>
            <li>
              <FaSun className="icon-home" />
              <h4>Energia Solar</h4>
              <p>
                Renovável e sem poluição, aproveita a luz do sol para substituir
                fontes de energia tradicionais.
              </p>
            </li>
            <li>
              <GiEcology className="icon-home" />
              <h4>Sustentabilidade</h4>
              <p>
                Optar por energia solar reduz a pegada de carbono e promove um
                futuro mais verde.
              </p>
            </li>
          </ul>
        </div>

        <div className="selection-container">
          <h1>COMO FUNCIONA?</h1>
          <p>
            Os painéis solares captam a luz do sol e a transformam em
            eletricidade de forma limpa e renovável, ajudando a reduzir a
            dependência de combustíveis fósseis e as emissões de carbono.
          </p>
          <Link to="/solucao">
            <button className="btn">Saiba Mais</button>
          </Link>
        </div>
      </section>
    </HomeStyle>
  );
};

export default Home;
