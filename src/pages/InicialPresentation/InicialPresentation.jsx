import { BoxIcones, BoxItens, BoxSobre, Container, ContainerBox, ImgPhoto } from "./style/style"

import GitHub from '@assets/img/GitHub.png'
import Linkedin from '@assets/img/Linkedin2.png'
import Wpp from '@assets/img/Whatsapp.png'
import MyPhoto from '@assets/img/eu.jpg'

export const InicialPresentation = () => {

    return (
        <Container>
            <ContainerBox>
                <BoxItens>
                    <h1>Olá, meu nome é <span>Jhonathan Santana</span></h1>
                    <h1>Eu sou Desenvolvedor Web</h1>
                    <p>Sou formado em Desenvolvimento Web pela Alura</p>
                    <BoxIcones>
                        <a href="https://github.com/JohnTestt" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="git-hub"></img></a>
                        <a href="https://www.linkedin.com/in/jhonathan-g-santana/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="linkdlin"></img></a>
                        <a href="https://wa.me/5561995920376" target="_blank" rel="noopener noreferrer" ><img src={Wpp} alt="wpp"></img></a>
                    </BoxIcones>
                </BoxItens>

                <BoxItens>
                    <ImgPhoto src={MyPhoto} alt="minha-Imagem"/>
                </BoxItens>
            </ContainerBox>

            <BoxSobre id="sobre">
                <div>
                    <h2>Sobre Mim</h2>
                    <p>Sou apaixonado por tecnologia, comida, filmes...</p>
                    <p>Possuo formação pela renomada instituição Alura, onde adquiri habilidades e conhecimento na área.</p>
                    <p>Acredito na importância de produzir trabalhos de qualidade e sempre busco me atualizar e aperfeiçoar minhas habilidades.</p>
                    <p>Seja bem-vindo ao meu portfólio, onde compartilho algumas de minhas realizações pessoais.</p>

                </div>
            </BoxSobre>
        </Container>
    )
}


