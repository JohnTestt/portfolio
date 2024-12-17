
import { CardContainer, CardImage, CardButtons, Button } from "./style/style";

export const ProjectCard = ({ image, liveLink, codeLink, title, descripition}) => (

    <CardContainer>
        <CardImage src={image} alt={title} />
        <h3>{title}</h3>
        <p>{descripition}</p>
        <CardButtons>
            <Button href={liveLink} target="_blank" rel="noopener noreferrer">Live</Button>
            <Button href={codeLink} target="_blank" rel="noopener noreferrer">Code</Button>
        </CardButtons>
    </CardContainer>
);
