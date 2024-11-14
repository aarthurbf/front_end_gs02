import styled from "styled-components";

export const HomeStyle = styled.section`
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

  .slide.active {
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

  .informacoes {
    background: var(--color3);
    color: var(--color6);
    padding: 6rem 3rem;
    text-align: center;
  }

  .informacoes h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .informacoes p {
    max-width: 50rem;
    font-size: 1.2rem;
    margin: 0 auto 2rem;
  }

  .informacoes hr {
    width: 16rem;
    height: 2px;
    background: var(--color4);
    border: none;
    margin: 0 auto 4rem;
  }

  .items {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .items li {
    text-align: center;
  }

  .icon-home {
    font-size: 2rem;
    color: var(--color7);
    margin-bottom: 1rem;
  }

  .selection-container {
    padding: 2rem 5%;
    text-align: center;
    max-width: 1200px;
    margin: 5rem auto;
    background-color: var(--color7);
    border-radius: 2rem;
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

  @media (max-width: 768px) {
    .slideshow-container {
      height: 50vh;
    }
    .informacoes {
      padding: 3rem 1rem;
    }
    .items {
      flex-direction: column;
    }
  }

  @media (max-width: 480px) {
    .slideshow-container {
      height: 40vh;
    }
  }
`;
