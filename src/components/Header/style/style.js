import styled from "styled-components";

export const HeaderMenu = styled.section`
  width: 100%;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: ${({theme}) => theme.background};
  
`;
export const Navigation = styled.nav`
  min-width: 90%;
  margin: 0 auto;
  min-height: 4rem;
  display: flex; 
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
 
  

  @media (max-width: 768px) {
    width: 95%;
  }
`;
export const StyledMenuButton = styled.div`
  display: none;

  & > svg {
    font-size: 28px; /* Define o tamanho diretamente no SVG */
  }

  @media (max-width: 768px) {
    display: flex;
   
   
  }
`;
export const NavigationItens = styled.div`
  

  img {
    max-width: 180px;
    max-height: 30px;
  }

  @media (max-width: 768px) {
    &:last-of-type {
      display: none; /* Esconde os itens de navegação no mobile */
    }
  }
`;
export const Itens = styled.ul`
  display: flex;
  list-style: none;

  a{
    text-decoration:none;
    color: inherit;

    &:hover {
     color: ${({theme}) => theme.colorBlue};
     
    }
  }

  li {
    padding-left: 1.5rem;
    font-size: 1.1rem;
  }

  li:hover {
    transform: scale(1.08);
    cursor: pointer;
  }
`;
