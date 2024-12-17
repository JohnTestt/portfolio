import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
padding: 0;
margin: 0;
font-family: 'Roboto', sans-serif;

}

html {
  scroll-behavior: smooth;
}

body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: all 0.5s ease; /* Suaviza a transição entre temas */
    p {
      font-size: 1.2rem;
    }
    h1{
      font-size: 2.2rem;
    }
    h2 {
      font-size: 2rem;
      display: flex; 
    align-items: center; 
    gap: .2rem; /* Espaço entre o texto e a linha */
    width: 100%;

    &::after {
      content: "";
      flex-grow: 1; /* Faz as linhas crescerem para preencher espaço */
      height: 4px; /* Espessura da linha */
     // background-color: #391386; /* Cor da linha */
      max-width: 40%; /* Ocupa até 50% no desktop */
      background-color: ${({theme}) => theme.colorBlue};
    }

    &::before {
      content: "#";
      color: ${({theme}) => theme.colorBlue};
      font-weight: bold;    
 }
    }

  h3 {
    font-size: 2rem;
  }

    @media (max-width: 768px) {  // adiciono diretamente  no componente
      
     h1, h2, h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
} 
  }

  main {
    max-width: 80%;
    margin: 0 auto;
    margin-top: 4rem;
   

    @media (max-width: 768px) {  // adiciono diretamente  no componente
    max-width: 95%;

} 
  }


`;
