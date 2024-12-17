import styled from "styled-components";

export const Container = styled.section `
    width: 100%;
    position: fixed;
    z-index: 3;
    background-color: ${({theme}) => theme.background};
   
`
export const ContainerItens = styled.section `
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-top: .8rem;
  justify-content: end;
  
`
export const Button = styled.div `
  padding: .6rem;

& > svg {
font-size: 28px; /* Define o tamanho diretamente no SVG */
}

  &:hover {
      cursor: pointer;
    background-color: ${({theme}) => theme.colorBlue};
     border-radius: 100%;
    }



`