import { useState } from "react";
import { SobreStyle } from "../css/SobreStyle";

const Sobre = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Pega os dados já existentes no localStorage ou cria um array vazio
    const dadosExistentes = JSON.parse(localStorage.getItem("produto")) || [];

    // Cria o novo item a ser adicionado
    const novoItem = { nome, email };

    // Atualiza o array de produtos com o novo item
    const dadosAtualizados = [...dadosExistentes, novoItem];

    // Salva os dados atualizados no localStorage
    localStorage.setItem("produto", JSON.stringify(dadosAtualizados));

    // Exibe o alerta
    alert("Email enviado com sucesso");

    // Limpa os campos após o envio
    setNome("");
    setEmail("");
  };

  return (
    <SobreStyle>
      <section className="selection">
        <div className="banner">
          <h2>TECNOLOGIA INOVADORA</h2>
        </div>

        <div className="selection-container">
          <h1 className="selection-title">TECNOLOGIA DE PAINÉIS SOLARES</h1>
          <p className="selection-text">
            A energia limpa, gerada a partir de fontes renováveis, é uma das
            principais soluções para um futuro sustentável. Dentre as
            tecnologias mais eficazes, o uso de painéis solares tem se destacado
            devido ao seu impacto ambiental reduzido e ao potencial de longo
            prazo. Os painéis solares funcionam por meio da captação da luz do
            sol, convertendo-a em eletricidade através de células fotovoltaicas.
            Esse processo evita emissões de gases poluentes e diminui a
            dependência de combustíveis fósseis, promovendo uma matriz
            energética mais ecológica.
          </p>
        </div>

        <div className="selection-container">
          <h1 className="selection-title">USO DOS PAINÉIS SOLARES</h1>
          <p className="selection-text">
            Além disso, os painéis solares são adaptáveis para diversos
            contextos, como residências, empresas e até mesmo áreas rurais,
            ampliando o acesso à energia sustentável em diferentes regiões. A
            tecnologia tem evoluído constantemente, com painéis cada vez mais
            eficientes e duradouros, tornando-se uma opção economicamente viável
            em muitos países. A longo prazo, o uso de energia solar contribui
            significativamente para a redução da pegada de carbono, auxiliando
            na preservação do meio ambiente e promovendo uma relação equilibrada
            entre consumo de energia e sustentabilidade.
          </p>
        </div>

        <div className="selection-form">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Mais informações</h2>
            <input
              placeholder="Escreva seu nome"
              aria-label="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              placeholder="Informe seu email"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </SobreStyle>
  );
};

export default Sobre;
