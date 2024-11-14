import styled from "styled-components";
import PainelBanner from "../assets/images/painel-sobre.jpg";

export const SobreStyle = styled.section`
  .banner {
    background: url(${PainelBanner}) no-repeat center center;
    background-size: cover;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 0 2rem;
  }

  .banner h2 {
    color: var(--color7);
    text-shadow: 1px 2px 6px #000;
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  .selection-container {
    padding: 2rem 5%;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .selection-title {
    color: var(--color3);
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .selection-text {
    color: var(--color1);
    font-size: 1.1rem;
    margin-top: 1.5rem;
    line-height: 1.6;
  }

  .selection-form {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }

  .form {
    width: 100%;
    max-width: 500px;
    background: var(--color7);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  }

  .form h2 {
    margin-bottom: 1.5rem;
    color: var(--color3);
    border-bottom: 2px solid var(--color2);
    padding-bottom: 0.5rem;
  }

  .form input,
  .form button {
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin-top: 1rem;
    outline: none;
    transition: border 0.3s, background 0.3s;
  }

  .form input {
    background: none;
    border: 2px solid var(--color6);
    color: var(--color1);
  }

  .form input:focus {
    border-color: var(--color4);
  }

  .form button {
    margin-top: 1.5rem;
    background: var(--color2);
    border: none;
    color: var(--color7);
    cursor: pointer;
  }

  .form button:hover {
    background: var(--color5);
  }

  @media (max-width: 768px) {
    .banner h2 {
      font-size: 2rem;
      margin: 0 1.5rem;
    }

    .selection-title {
      font-size: 2rem;
    }

    .selection-text {
      font-size: 1rem;
      margin: 1.5rem 2rem;
    }
  }

  @media (max-width: 480px) {
    .banner h2 {
      font-size: 1.5rem;
    }

    .selection-container {
      padding: 1rem;
    }

    .selection-text {
      font-size: 0.9rem;
    }
  }
`;
