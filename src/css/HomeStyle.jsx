import styled from "styled-components";

export const HomeStyle = styled.section`
  .container {
    display: flex;
    align-items: flex-start;
    padding: 3rem 3rem 0rem 3rem;
    justify-content: space-between;
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
  }

  .selection-text {
    color: var(--color1);
    font-size: 1.1rem;
    margin-top: 1.5rem;
    line-height: 1.6;
  }

  /* Slideshow */
  .slideshow-container {
    position: relative;
    width: 100%;
    height: 70vh;
    overflow: hidden;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .slide-active {
    opacity: 1;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1;
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }

  /* Vantagens */
  .informacoes {
    background: var(--color3);
    color: var(--color6);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6.25rem 3.12rem;
    text-align: center;
  }

  .informacoes h3 {
    font-size: 2rem;
    margin-bottom: 2.1rem;
  }

  .informacoes p {
    max-width: 50rem;
    margin-bottom: 2.1rem;
    font-size: 1.2rem;
    text-align: center;
  }

  .informacoes hr {
    width: 16rem;
    height: 2px;
    background: var(--color4);
    margin-bottom: 4.3rem;
    border: none;
  }

  .informacoes .item {
    width: 100%;
    display: flex;
  }

  .informacoes .item li {
    padding: 0 1.8rem;
    text-align: center;
  }

  .informacoes .item li h4 {
    color: var(--color6);
    font-size: 1.5rem;
    margin-bottom: 1.8rem;
  }

  .informacoes .item li p {
    font-size: 1.2rem;
    margin-bottom: 1.8rem;
  }

  .icon-home {
    font-size: 2rem;
    color: var(--color7);
  }

  .btn {
    width: 100%;
    padding: 0.75rem;
    margin-top: 1.5rem;
    background: var(--color4);
    border: none;
    color: var(--color7);
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background 0.3s;
  }

  .btn:hover {
    background: var(--color5);
  }



  @media (max-width: 1024px) {
    .container {
      flex-direction: column;
      align-items: center;
      padding: 1rem;
    }
    .informacoes .item {
      flex-direction: column;
      align-items: center;
    }

    .informacoes hr {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 1rem 0.5rem;
    }
    .slideshow-container {
      height: 50vh;
    }
    .informacoes {
      padding: 3rem 1rem;
    }
  }

  @media (max-width: 480px) {
    .slideshow-container {
      height: 40vh;
    }
  }
  @media (max-width: 320px) {
    .selection-title {
      font-size: 1.4rem;
    }
  }
`;
