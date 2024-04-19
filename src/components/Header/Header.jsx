import React, { useEffect } from 'react';
import '../Variables/General.css';
import '../Header/Header.css';
import { LogoClaro, LogoGithub, LogoLinkedin } from '../assets/Logo';


export const Header = () => {
  useEffect(() => {
    const toggle = document.getElementById('toggle');
    const dir = document.querySelector('.dir');

    const handleChange = () => {
      if (toggle.checked) {
        dir.classList.add('active');
      } else {
        dir.classList.remove('active');
      }
    };

    toggle.addEventListener('change', handleChange);

    
  }, []);
  
  return (
    <header>
      <a href="index.html">
        <LogoClaro className="logo" />
      </a>
      <nav className="dir">
        {/* <a href="index.html" className="home"><p>Home</p></a> */}
        {/* <a href="#pojects" className="projects"><p>Projects</p></a> */}
        {/* <a href="#"><p>CSS</p></a> */}
        {/* <a href="#contact"><p>Contact</p></a> */}
      </nav>
      <nav className="social">
        <a href="https://www.linkedin.com/in/alberto-diaz-esteban/" target='_blank' id="LinkedIn">
          <LogoLinkedin />
        </a>
        <a href="https://github.com/AlbertoDiazEsteban" target='_blank' id="Github">
          <LogoGithub />
        </a>
        <div className="container">
          <div className="toggle"></div>
        </div>
      </nav>
      <div className="hamburguer-container">
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="hamburguer">
          <div className="line line0"></div>
          <div className="line line1"></div>
          <div className="line line3"></div>
          <div className="line line4"></div>
        </label>
      </div>
    </header>
  );
};
