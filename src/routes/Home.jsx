import React, { useState } from "react";
import { Link } from 'react-router-dom';
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

  const changeSlide = (direction) => {
    setCurrentIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % images.length
        : prevIndex === 0
        ? images.length - 1
        : prevIndex - 1
    );
  };

  return (
    <HomeStyle>
      <section>
        <section className="slideshow-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${
                index === currentIndex ? "slide-active" : ""
              }`}
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
        </section>

        {/* SERVIÇOS */}
        <section className="informacoes">
          <h3>Venha Conhecer</h3>
          <p>
            Você sabia que os painéis solares podem reduzir até 95% da sua conta
            de energia e ainda ajudam a preservar o meio ambiente? Essa
            tecnologia está cada vez mais acessível e é uma excelente forma de
            contribuir para um futuro sustentável, diminuindo nossa dependência
            de combustíveis fósseis. Além de economizar, você estará investindo
            em um mundo mais verde para as próximas gerações. Quer saber mais?
            Descubra como a energia solar pode transformar seu dia a dia e o
            planeta!
          </p>
          <hr />
          <ul className="item">
            <li>
              <span className="icon-home">
                <FaSolarPanel />
              </span>
              <h4>Painéis Solares</h4>
              <p>
                Captam luz solar para gerar eletricidade, ajudando a economizar
                e reduzir impactos ambientais.
              </p>
            </li>
            <li>
              <span className="icon-home">
                <FaSun />
              </span>
              <h4>Energia Solar</h4>
              <p>
                Renovável e sem poluição, aproveita a luz do sol para substituir
                fontes de energia tradicionais.
              </p>
            </li>
            <li>
              <span className="icon-home">
                <GiEcology />
              </span>
              <h4>Sustentabilidade</h4>
              <p>
                Optar por energia solar reduz a pegada de carbono e promove um
                futuro mais verde.
              </p>
            </li>
          </ul>
        </section>

        <div className="selection-container">
          <h1 className="selection-title">COMO FUNCIONA ?</h1>
          <p className="selection-text">
            Os painéis solares são dispositivos que captam a luz do sol e a
            transformam em eletricidade de forma limpa e renovável. Essa
            tecnologia não emite poluentes e aproveita uma fonte abundante de
            energia, ajudando a reduzir a dependência de combustíveis fósseis e
            as emissões de carbono. Com sua instalação cada vez mais acessível,
            os painéis solares representam um passo essencial para um futuro
            sustentável, permitindo que residências e empresas economizem
            energia e contribuam para a preservação ambiental.
          </p>
          <Link to="/solucao"><button className="btn" >Saiba Mais</button></Link>
        </div>
      </section>
    </HomeStyle>
  );
};

export default Home;
