import styled from "styled-components";


export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
 
 
`;

export const ContainerBox = styled.div`
 
  display: flex;
  max-width: 80%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 8rem;
  margin-bottom: 6rem;
`;

export const BoxItens = styled.div`
  text-align:center;
  h3{
    margin-bottom: 2rem;
  }

  button{
    border-radius: 12px;
    padding: .8rem 2rem;
    color: #ffffff;
    background-color: #1976d2;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    margin-top: 5rem;
    
  }
 
`;

export const BoxIcones = styled.div`
    padding: 3rem 0;
   
    img{
        filter: brightness(0) saturate(100%) invert(36%) sepia(72%) saturate(772%)
        hue-rotate(172deg) brightness(100%) contrast(102%);
        width: 4rem; /* Ajuste o tamanho dos ícones */
        height: 4rem; /* Para manter a proporção */
        padding: 0 .8rem;
      
       
    }
`
export const BoxFooter = styled.footer`
  display: flex;
  min-height: 5rem;
  align-items: center;
  
  div{
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    text-align:center;
  }
`;