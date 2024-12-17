//STYLED
import {
  StyledMobileMenu, ListItem, ListItemIcon, ListItemText,
  Title, TitleMenu, BoxMobile
} from "./styles/styles.js";

import CodeIcon from '@mui/icons-material/Code';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import AttachFileIcon from '@mui/icons-material/AttachFile';



export const Drawer = ({ open }) => {


  return (
    <>
      <BoxMobile open={open} />
      <StyledMobileMenu $isOpen={open}>

        <TitleMenu>
          <Title></Title>
        </TitleMenu>

        <ListItem>
          <ListItemIcon><CodeIcon /></ListItemIcon>
          <ListItemText><a href="#sobre">Sobre Mim</a></ListItemText>
        </ListItem>


        <ListItem>
          <ListItemIcon>< ContentPasteSearchIcon /></ListItemIcon>
          <ListItemText> <a href="#Skills">Skills</a></ListItemText>
        </ListItem>

        <ListItem>
          <ListItemIcon><CollectionsIcon /></ListItemIcon>
          <ListItemText>  <a href="#projetos">Projetos</a></ListItemText>
        </ListItem>

        <ListItem>
          <ListItemIcon><AttachFileIcon /></ListItemIcon>
          <ListItemText><a href="">Curriculum</a></ListItemText>
        </ListItem>

      </StyledMobileMenu>
    </>
  )
}