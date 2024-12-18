import { useState } from "react";
import { HeaderMenu, Navigation, StyledMenuButton, NavigationItens, Itens } from "./style/style"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '@assets/logo.eldp.png'

import { Drawer } from "../Drawer/Drawer";

export const Header = () => {

  const [openDrawer, setOpenDrawer] = useState(false);


  const handleOpendrawer = () => setOpenDrawer(!openDrawer);

  return (
    <>
      <HeaderMenu>
        <Navigation>

          <StyledMenuButton onClick={handleOpendrawer}>
            {
              openDrawer ? <CloseIcon /> : <MenuIcon />

            }
          </StyledMenuButton>

          <NavigationItens>
            <img src={Logo} /> 
          </NavigationItens>

          <NavigationItens>
            <Itens>
              <a href="#sobre"><li>Sobre Mim</li></a>
              <a href="#Skills"><li>Skills</li></a>
              <a href="#projetos"><li>Projetos</li></a>
              <a><li>Curriculum</li></a>

            </Itens>
          </NavigationItens>

        </Navigation>
      </HeaderMenu>

      {openDrawer && <Drawer open={openDrawer} />}

    </>
  )
}