import './App.css';
import { Header } from './components/Header/Header';
import { Presentation } from './components/Presentation/Presentation';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
//import { About } from './components/About/About';

function App() {
  return (
    <>
     <Header/>
     <Presentation/>
     {/* <About /> */}
     <Projects/>
     <Skills/>
     <Footer/> 
    </>
      );
}

export default App;
