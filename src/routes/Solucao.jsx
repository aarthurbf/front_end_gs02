import { SolucaoStyle } from "../css/SolucaoStyle";
import { useState } from "react";
import Painel1 from "../assets/images/painel1.jpg";
import Painel2 from "../assets/images/painel2.jpg";
import Painel3 from "../assets/images/paineL-solar.jpg";

const Solucao = () => {
  const images = [Painel1, Painel2, Painel3];
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
    <SolucaoStyle>
      <div className="banner">
        <h2>PAINÉIS SOLARES</h2>
      </div>
      <div className="container">
        <div className="specs">
          <h3>REDUÇÃO DE CUSTOS</h3>
          <p>REDUZ A CONTA EM ATÉ 95%</p>
          <h3>PRODUÇÃO DE ENERGIA</h3>
          <p>350 A 450 kWh</p>
          <h3>VIDA ÚTIL</h3>
          <p>25 A 30 ANOS</p>
          <h3>REDUÇÃO DE EMISSÕES</h3>
          <p>1 TONELADA DE CO₂</p>
        </div>
        <div className="content">
          <h1>MAIS BARATO, ECOLÓGICO E SUSTENTÁVEL</h1>
          <p>
            Os painéis solares captam a luz do sol e a convertem em eletricidade
            através de células fotovoltaicas.
          </p>
        </div>
      </div>
      <div className="selection-container">
        <h1 className="selection-title">ACESSIBILIDADE A TODOS</h1>
        <p className="selection-text">
          Para tornar a energia solar acessível e contribuir para um futuro mais
          verde, iremos adotar soluções modulares e personalizadas juntamente
          com ações de educação e conscientização. A disponibilização de kits
          solares residenciais em sistemas modulares permite que as pessoas
          iniciem com uma configuração básica, que pode ser ampliada ao longo do
          tempo de acordo com as necessidades e possibilidades financeiras. Além
          disso, iniciativas como a instalação de painéis em áreas comunitárias,
          como telhados de prédios ou centros de uso comum, permitem que várias
          famílias compartilhem a energia gerada, o que reduz o custo individual
          e facilita o acesso à energia limpa.
        </p>
      </div>
      <div className="selection-container">
        <h1 className="selection-title">O FUTURO É SOLAR</h1>
        <p className="selection-text">
          Além disso, os painéis solares são adaptáveis para diversos contextos,
          como residências, empresas e até mesmo áreas rurais, ampliando o
          acesso à energia sustentável em diferentes regiões. A tecnologia tem
          evoluído constantemente, com painéis cada vez mais eficientes e
          duradouros, tornando-se uma opção economicamente viável. A longo
          prazo, o uso de energia solar contribui significativamente para a
          redução da pegada de carbono, auxiliando na preservação do meio
          ambiente e promovendo uma relação equilibrada entre consumo de energia
          e sustentabilidade.
        </p>
      </div>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "slide-active" : ""}`}
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
    </SolucaoStyle>
  );
};

export default Solucao;
