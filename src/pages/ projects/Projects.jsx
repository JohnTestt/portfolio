import { Container, ContainerBox, Button, ContainerButton } from "./style/style"
import Barber from '@assets/print-projects/barber.png'
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { useState } from "react";

export const Projects = () => {

    const [showAll, setShowAll] = useState(false);

    const projectData = [
        { image: Barber, title: 'Barber Shop', livelink: 'https://johntestt.github.io/Barber-Shop/', codeLink: 'https://github.com/JohnTestt/Barber-Shop', descripition: 'HTML, CSS e JavaScript' },
        { image: Barber, title: 'Barber Shop', livelink: '', codeLink: '' },
        { image: Barber, title: 'Barber Shop', livelink: '', codeLink: '' },
        { image: Barber, title: 'Barber Shop', livelink: '', codeLink: '' },
        { image: Barber, title: 'Barber Shop', livelink: '', codeLink: '' }
    ];

      // Controla quais projetos são exibidos: 2 ou todos
      const visibleProjects = showAll ? projectData : projectData.slice(0,2);

      const handleOpenAllProjects = () => setShowAll(!showAll);

 

    return (
        <Container>
            <h2>Projetos</h2>
            <ContainerBox>
                {visibleProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        liveLink={project.livelink}
                        codeLink={project.codeLink}
                        descripition={project.descripition}
                    />
                ))}
            </ContainerBox>
            <ContainerButton>
            <Button onClick={() => handleOpenAllProjects()}>
                {
                showAll ? 'X' : 'Visualizar Todos  -------->'
                }
                </Button>
            </ContainerButton>
            
        </Container>
    );
}

