import  styled from "styled-components";


export  const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.background};
  position: fixed;
  top: 3rem;
  left: 0;
  min-width: 60%;
  height: 100%;
  z-index: 4;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;



export const ListItem =styled.button`

display: flex;
flex-direction: row;
align-items: center;
width: 90%;
height: 3rem;
margin: .2rem;
border: none;
background-color: ${({theme}) => theme.background};
color:${({theme}) => theme.color};




;

&:hover {
  background: #1976d2;
    cursor: pointer;
    border-radius: 12px;
  }

  @media screen and (max-width:480px){
    padding: 0 .5rem;

  } 


`
export const ListItemIcon = styled.div`

width: 35%;

`
export const ListItemText = styled.div`
text-align: left;
width: auto;


a{
  text-decoration:none;
  color:${({theme}) => theme.color};
}



`
export const TitleMenu = styled.div`

text-align: center;
margin-bottom: .6rem;


`

export const Title = styled.h3`
  margin: 1rem 0;
   
`
export const BoxMobile = styled.section`
  border: solid red 3px;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%; 
  display: ${({ open }) => (open ? 'block' : 'none')}; /* Só aparece se estiver aberto */
  background-color: rgba(0, 0, 0, 0.8); /* Semitransparência */
   
`