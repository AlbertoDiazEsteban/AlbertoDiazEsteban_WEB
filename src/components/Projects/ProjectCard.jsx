import React, { useState, useEffect } from 'react';
import '../Variables/General.css';
import '../Contact/Contact.css';
import '../Projects/ProjectCard.css';

import { LogoGithub } from '../assets/Logo';

function CardProject(props) {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const images = [props.urlImgDemo1, props.urlImgDemo2, props.urlImgDemo3];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, []);
          
    return (
      <div className="project-card">
        <div className="project-img">
            <img className='project-images' src={images[currentImgIndex]} alt="Project Image" />
        </div>
      <div className="project-description">
        <div className="logos">
          <a href="https://github.com/AlbertoDiazEsteban"><LogoGithub /></a>
        </div>
        <div>
          <h2 onClick={() => window.open(props.urlDemo)}>{props.projectName}</h2>
          <p>{props.projectDescription}</p>
          <div className="technologies-container">
            {props.projectTechnologies.map((technology, index) => (
                <span key={index} className="technology">{technology}</span>
            ))}
          </div>
          <div className="btn-container">
            <button><a href={props.urlDemo} target="_blank" rel="noopener noreferrer">Demo</a></button>
            <button><a href={props.urlRepository} target="_blank" rel="noopener noreferrer">Repositorio</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
