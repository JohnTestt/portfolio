
import JavaScript from "@assets/img/JavaScript.png";
import ReactLogo from "@assets/img/React.png";
import Node from "@assets/img/NodeJs.png";
import Git from "@assets/img/Git.png";
import Mysql from "@assets/img/mysql-original-wordmark.png";
import Linux from "@assets/img/linux-original.png";
import StyledComponents from '@assets/img/file-type-styled.svg'

import { BoxItens, Container, ScrollingContainer, ScrollingContent } from "./style/style";

export const Skills = () => {

   
  
    const skills = [
    { img: JavaScript, name: "JavaScript" },
    { img: ReactLogo, name: "React" },
    { img: Node, name: "Node.js" },
    { img: StyledComponents, name: "Styled-Components" },
    { img: Git, name: "Git" },
    { img: Mysql, name: "MySQL" },
    { img: Linux, name: "Linux" },
  
  ];

  return (
    <Container>
      <h2>Skills</h2>
      <ScrollingContainer> 
        <ScrollingContent>
          {skills.map((skill, index) => (
            <BoxItens key={index}>
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </BoxItens>
          ))}
          {/* Duplica os itens para criar o loop contínuo */}
          {skills.map((skill, index) => (
            <BoxItens key={`clone-${index}`}>
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </BoxItens>
          ))}
        </ScrollingContent>
      </ScrollingContainer>
    </Container>
  );
};
