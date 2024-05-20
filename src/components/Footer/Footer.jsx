import React from 'react'
import '../Variables/General.css';
import '../Footer/Footer.css';
import { LogoClaro, LogoGithub, LogoLinkedin } from '../assets/Logo';

export const Footer = () => {
  return (
<footer className="footer">
        <div className="footer-column col-logo">
          <a className='logo' href="index.html" name="home" aria-label="Ir a la página de inicio" rel="noreferrer">
            <LogoClaro />
          </a>
        </div>
        <div className="footer-column">
            <h3>Echa un vistazo</h3>
            <hr />
            <ul>
            <li><a href="#about" name="about" aria-label="Sobre Mí" rel="noopener noreferrer">
                Sobre Mí
            </a></li>
            <li><a href="#projects" name="projects" aria-label="Proyectos" rel="noopener noreferrer">
                Proyectos
            </a></li>
            <li><a href="#skills" name="skills" aria-label="Skills" rel="noopener noreferrer">
                Skills
            </a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h3>Otros proyectos</h3>
            <hr />
            <ul>
                <li><a href="https://css-effects-gallery.vercel.app/" target='_blank' name="css-effects" aria-label="Galería de efectos CSS" rel="bookmark noopener noreferrer">
                    Galería de efectos CSS
                </a></li>
                <li><a href="https://color-picker-six-sigma.vercel.app/" target='_blank' name="color-picker" aria-label="Portfolio de Diseño Gráfico" rel="bookmark noopener noreferrer">
                    Portfolio de Diseño Gráfico
                </a></li>
                <li><a href="https://drive.google.com/file/d/1R12CouDMhVtPXJe6yzFL87rcDjsArB1M/view?usp=sharing" target='_blank' name="pokedex" aria-label="Curriculum Vitae" rel="bookmark noopener noreferrer">
                    Curriculum Vitae
                </a></li>            
            </ul>
        </div>
        <div className="footer-column">
          <a href="https://drive.google.com/file/d/1R12CouDMhVtPXJe6yzFL87rcDjsArB1M/view?usp=sharing" className="btn action-btn" aria-label="Visita mi Curriculum Vitae">Visita mi CV</a>
          <a href="mailto:your-email@example.com" className="btn normal-btn" aria-label="Enviar un correo electrónico">Enviar e-mail</a>
        </div>
        {/* <div className="footer-icons">
          <p>
            Visita mi linkedin
            <a href="https://www.linkedin.com/in/alberto-diaz-esteban/" target='_blank' id="LinkedIn" name="my linkedin" rel="noreferrer">
              <LogoLinkedin />
            </a>
          </p>
          <p>
            Visita mi linkedin
            <a href="https://github.com/AlbertoDiazEsteban" target='_blank' id="Github" name="my github" rel="noreferrer">
              <LogoGithub />
            </a>
          </p>
        </div> */}

        <div className="footer-bottom">
            <p>©Alberto Díaz Esteban - 2024</p>
        </div>
    </footer>
  )
}




