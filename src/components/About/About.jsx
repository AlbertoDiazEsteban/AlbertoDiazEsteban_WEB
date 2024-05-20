import React from 'react';
import '../Variables/General.css';
import '../About/About.css';
import meimg from '../assets/img/me1.JPG'

export const About = () => {
  return (
    <div className='about'>
      <h1>Sobre mí</h1>
      <div className='circle'></div>
      <div className='row'>
        {/* <img src={meimg} alt="" /> */}
        <p>Desde pequeño, he tenido una gran imaginación y creatividad, lo que me llevó a destacar en concursos de arte infantil. He leído, dibujado, escrito y construido mis universos propios. Me considero una persona curiosa y con mucha ilusión por entender lo que me rodea y descubrir aquello que desconozco. Toda esta pasión guió mi carrera hacia el desarrollo web y diseño gráfico, donde combino arte y tecnología para crear experiencias visuales.</p>
      </div> 
      <div className='row'>
        {/* <img src={meimg} alt="" /> */}
        <p>Recientemente, me he especializado en desarrollo web frontend, lo que me permite crear soluciones intuitivas y experiencias de usuario excepcionales. Además, soy apasionado de la inteligencia artificial y utilizo modelos avanzados para potenciar mi creatividad y automatizar tareas en programación.</p>
      </div>
      
    </div>

  );
};
