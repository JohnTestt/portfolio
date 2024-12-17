import { useTheme } from "../../theme/ThemeContext";

import { Button, Container, ContainerItens } from "./style/style";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';



export const ModeSwitcher = () => {

    const {darkMod, handleMod} = useTheme();

    return(
        <Container>
      <ContainerItens>
      <Button onClick= {() => {handleMod()}}>
            {
                darkMod ? <LightModeIcon/> : <DarkModeIcon/>
            }
        </Button>
      </ContainerItens>
        </Container>
    )
}