import { BoxFooter, Container, ContainerBox, BoxIcones, BoxItens } from "./style/style";
import Wpp from '@assets/img/Whatsapp.png'
import Gmail from '@assets/img/Gmail.png'
import Linkedin from '@assets/img/Linkedin2.png'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0, 
          behavior: "smooth", 
        });
    }
  
    return (
        <Container>
        <ContainerBox>

            <BoxItens>
                <h3>Vamos Conversar!!</h3>
                <BoxIcones>
                    <a href="https://wa.me/5561995920376" target="_blank" rel="noopener noreferrer" ><img src={Wpp} alt="wpp"></img></a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jhonathandev25@gmail.com" 
                    target="_blank"  rel="noopener noreferrer"><img src={Gmail} alt="gmail" /></a>
                    <a href="https://www.linkedin.com/in/jhonathan-g-santana/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="linkdlin"></img></a>

                </BoxIcones>
              
                <button onClick={scrollToTop}>Voltar ao topo < ArrowUpwardIcon/></button>
            </BoxItens>

        </ContainerBox>

        <BoxFooter>
            <div>
            <p>Copyright © Jhonathan Santana · 2024</p>
            </div>
           
        </BoxFooter>
    </Container>
    )
}
    
   
