import { Header } from "./components/Header/Header"
import { ModeSwitcher } from "./components/ModeSwitcher/ModeSwitcher"
import { Projects } from "./pages/ projects/Projects"
import { InicialPresentation } from "./pages/InicialPresentation/InicialPresentation"
import { Skills } from "./pages/skills/Skills"
import { Footer } from "./pages/footer/Footer"


function App() {


  return (
    <>
     <Header/>
      <ModeSwitcher/>
      
     <main>
      <InicialPresentation/>
      <Skills/>
      <Projects/>
     </main>
     <Footer/>
    
    </>
  )
}

export default App
