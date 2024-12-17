import styled from "styled-components";


export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  min-height: 85vh;
`;
export const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

 padding: 2rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`;
export const BoxItens = styled.div`
  padding: 1.6rem;
 
  h1, p {
    padding: .8rem;
   
  }

  h1 {
     
    span {
      font-size: inherit;
      margin: 0 0.3rem;

      &::after {
        content: "/>";
        color: #391386;
        font-weight: bold;
      }

      &::before {
        content: "</";
        color: #391386;
        font-weight: bold;
      }
    }
  }
  @media (max-width: 768px) {
    
    text-align: center;
    padding: 1rem;
    
    &:nth-child(2) {
      order: -1; /* Move este elemento para o topo no mobile */
    }
  }
`;

export const BoxIcones = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
 
  img {
    filter: brightness(0) saturate(100%) invert(36%) sepia(72%) saturate(772%)
      hue-rotate(172deg) brightness(100%) contrast(102%);

    width: 4.5rem; /* Ajuste o tamanho dos ícones */
    height: 4.5rem; /* Para manter a proporção */

    &:hover {
      filter: brightness(0) saturate(100%) invert(13%) sepia(54%)
        saturate(2264%) hue-rotate(242deg) brightness(89%) contrast(100%);
    }
  }

  @media (max-width: 768px) {
    
    justify-content: center;
    img {
      width: 3.2rem; /* Reduz ainda mais para telas menores */
      height: 3.2rem;
    }
  }
`;

export const ImgPhoto = styled.img`
  border-radius: 100%;
  width: 22rem; /* Largura fixa */
  height: 22rem; /* Altura fixa igual à largura */
  
 
  @media (max-width: 768px) {
   
    width: 14rem; 
    height: 14rem;
  }
`;
export const BoxSobre = styled.div`

line-height: 1.6;
margin: 2rem 0;



`;
