import React from 'react';
import '../Variables/General.css';
import CardProject from './ProjectCard';

export const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <h3>Check my last projects</h3>
      
      <CardProject
        projectName="SEO Birdlife"
        projectDescription="Es&shy;ta pá&shy;gi&shy;na web in&shy;mer&shy;si&shy;va mues&shy;tra los hi&shy;tos y da&shy;tos de los úl&shy;ti&shy;mos 10 a&shy;ños de la em&shy;pre&shy;sa Seo&shy;BirdLife, una or&shy;ga&shy;ni&shy;za&shy;ción de&shy;di&shy;ca&shy;da a la con&shy;ser&shy;va&shy;ción y el es&shy;tu&shy;dio de las a&shy;ves a ni&shy;vel na&shy;cio&shy;nal en Es&shy;pa&shy;ña."
        projectTechnologies={["JavaScript", "HTML5", "CSS", "A-Frame", "VR", "Gráficos 3D", "Modelado 3D", "Blender"]}
        

        urlImgDemo1="https://cdn.glitch.global/2ed6f6ae-b434-4f9e-ab1d-7238902ab310/SEO_Birdlife1.png?v=1713470382318"
        urlImgDemo2="https://cdn.glitch.global/2ed6f6ae-b434-4f9e-ab1d-7238902ab310/SEO_Birdlife3.png?v=1713470386575"
        urlImgDemo3="https://cdn.glitch.global/2ed6f6ae-b434-4f9e-ab1d-7238902ab310/SEO_Birdlife2.png?v=1713470380647"
        urlDemo="https://seobirdlife.coderf5.es/frontend/sky-1.html"
        urlRepository="https://github.com/AlbertoDiazEsteban/PorfolioReact_Fontend"
      />

      <CardProject
        projectName="Rotom-Dex"
        projectDescription="¡Os pre&shy;sen&shy;to a Rotom-dex! Sí, o&shy;tra Poke-Api, lo sé, pe&shy;ro co&shy;mo un fri&shy;ki de Po&shy;ké&shy;mon des&shy;de pe&shy;que&shy;ño, no pu&shy;de e&shy;vi&shy;tar&shy;lo. Lo que ha&shy;ce di&shy;fe&shy;ren&shy;te a mi PokeDex es la in&shy;ter&shy;faz ins&shy;pi&shy;ra&shy;da en el a&shy;ni&shy;me y las a&shy;ni&shy;ma&shy;cio&shy;nes CSS u&shy;ti&shy;li&shy;zan&shy;do key&shy;fra&shy;mes"
        projectTechnologies={["JavaScript", "HTML5", "CSS", "Animations"]}
        urlImgDemo1="https://cdn.glitch.global/2ed6f6ae-b434-4f9e-ab1d-7238902ab310/pokedex1.png?v=1713470358866"
        urlImgDemo2="https://cdn.glitch.global/2ed6f6ae-b434-4f9e-ab1d-7238902ab310/pokedex2.png?v=1713470361802"
        urlImgDemo3="https://cdn.glitch.global/2ed6f6ae-b434-4f9e-ab1d-7238902ab310/pokedex3.png?v=1713470366482"
        urlDemo="https://rotom-poke-dex.vercel.app/pokedex.html"
        urlRepository="https://github.com/ejemplo/proyecto2https://github.com/AlbertoDiazEsteban/Rotom-PokeDex.git"
      />

      {/* <CardProject
        projectName="Proyecto 2"
        projectDescription="Descripción del proyecto 2."
        projectTechnologies={["Angular", "Firebase"]}
        urlImgDemo1=""
        urlImgDemo2=""
        urlImgDemo3=""
        urlDemo="https://rotom-poke-dex.vercel.app/pokedex.html"
        urlRepository="https://github.com/ejemplo/proyecto2"
      /> */}
    </div>
  );
}



 