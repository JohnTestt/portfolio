import styled, { keyframes } from "styled-components";

// Animação para o scroll horizontal infinito
const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
 
  h2 {
    margin-bottom: 2rem;
  }
`;

export const ScrollingContent = styled.div`
  display: flex;
  animation: ${scrollAnimation} 15s linear infinite; /* Velocidade da animação */
  width: calc(200%); /* Largura para suportar as imagens duplicadas */
 
  /*feacture de pausar */
 animation-play-state: running; /* Garante que a animação esteja rodando inicialmente */

 @media (max-width: 768px) {  // adiciono diretamente  no componente
   
   animation: ${scrollAnimation} 10s linear infinite;
     }
`;


export const ScrollingContainer = styled.div`
  overflow: hidden; /* Esconde o conteúdo que sai dos limites */
  width: 100%;
 
   /*feacture de pausar  (desativar?)*/
  &:hover ${ScrollingContent} {
    animation-play-state: paused; /* Pausa a animação */
  }

`;


export const BoxItens = styled.div`
  flex: 0 0 auto; /* Garante que cada item mantenha seu tamanho */
  text-align: center;
  padding: 1rem 2rem;
  margin: .5rem;
 
  img {
    width: 7rem; /* Ajuste o tamanho dos ícones */
    height: 7rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.1rem;
    color: ${({theme}) => theme.colorBlue};
  }
`;
