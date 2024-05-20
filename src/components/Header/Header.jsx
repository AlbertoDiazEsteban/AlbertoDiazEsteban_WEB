import React, { useState, useEffect } from 'react';
import '../Variables/General.css';
import '../Header/Header.css';
import { LogoClaro, LogoGithub, LogoLinkedin } from '../assets/Logo';

export const Header = () => {
  const [scrollClass, setScrollClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrollClass('scroll-header');
      } else {
        setScrollClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (

    <header className={scrollClass}>
      <a className='logo' href="index.html" name="home" aria-label="Ir a la página de inicio" rel="noreferrer">
        <LogoClaro />
      </a>
      <nav className="social">
        <a href="https://www.linkedin.com/in/alberto-diaz-esteban/" target='_blank' id="LinkedIn" name="my linkedin" rel="noreferrer">
          <LogoLinkedin />
        </a>
        <a href="https://github.com/AlbertoDiazEsteban" target='_blank' id="Github" name="my github" rel="noreferrer">
          <LogoGithub />
        </a>
        <div className="container">
          <div className="toggle"></div>
        </div>
      </nav>
    </header>

  );
};
