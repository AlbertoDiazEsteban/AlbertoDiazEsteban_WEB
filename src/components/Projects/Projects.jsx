import React from 'react';
import '../Variables/General.css';
import ProjectCard from './ProjectCard';
import { PokePhone, PokeTablet, ApplePhone, AppleTablet, ApplePc, LogoPoke, LogoPicker, LogoSeo } from '../assets/CardsSvg'; 


export const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h1>Proyectos</h1>
      <h2>Echa un vistazo a mis últimos proyectos</h2>
      <br/>
      
      {/* <h1>Projects</h1>
      <h3>Check my last projects</h3> */}

        <ProjectCard
          mobileDevice={PokePhone}
          tabletDevice={PokeTablet}
          imgProjectPhone="https://cdn.glitch.global/2ed6f6ae-b434-4f9e-ab1d-7238902ab310/pokedex1.png?v=1713470358866"
          projectLogo={LogoPoke}
          urlBackground="https://css-effects-gallery.vercel.app/zig-zag-background.html"
          title="Rotom-Dex"
          description="¡Os pre&shy;sen&shy;to a la Rotom-dex! Sí, o&shy;tra Poke-Api, lo sé, pe&shy;ro co&shy;mo un fri&shy;ki de Po&shy;ké&shy;mon des&shy;de pe&shy;que&shy;ño, no pu&shy;de e&shy;vi&shy;tar&shy;lo. Lo que ha&shy;ce di&shy;fe&shy;ren&shy;te a mi PokeDex es la in&shy;ter&shy;faz ins&shy;pi&shy;ra&shy;da en el a&shy;ni&shy;me y las a&shy;ni&shy;ma&shy;cio&shy;nes CSS u&shy;ti&shy;li&shy;zan&shy;do key&shy;fra&shy;mes"
          Technologies={["JavaScript", "HTML5", "CSS", "CSS Animations", "KeyFrames", "Fetch Poke-API"]}
          urlSite="https://rotom-poke-dex.vercel.app/pokedex.html"
          urlCode="https://github.com/AlbertoDiazEsteban/Rotom-PokeDex"
        />

        <ProjectCard
          mobileDevice={ApplePhone}
          tabletDevice={AppleTablet}
          projectLogo={LogoSeo}
          urlBackground="https://css-effects-gallery.vercel.app/stars-sky-animation.html"
          title="SEO Birdlife"
          description="Es&shy;ta pá&shy;gi&shy;na web in&shy;mer&shy;si&shy;va mues&shy;tra los hi&shy;tos y da&shy;tos de los úl&shy;ti&shy;mos 10 a&shy;ños de la em&shy;pre&shy;sa Seo&shy;BirdLife, una or&shy;ga&shy;ni&shy;za&shy;ción de&shy;di&shy;ca&shy;da a la con&shy;ser&shy;va&shy;ción y el es&shy;tu&shy;dio de las a&shy;ves a ni&shy;vel na&shy;cio&shy;nal en Es&shy;pa&shy;ña."
          Technologies={["JavaScript", "HTML5", "CSS", "A-Frame", "VR", "Gráficos 3D", "Modelado 3D", "Blender"]}
          urlSite="https://seobirdlife.coderf5.es/frontend/sky-1.html"
          urlCode="https://github.com/AlbertoDiazEsteban/PorfolioReact_Fontend"
        />

        <ProjectCard
          mobileDevice={ApplePhone}
          tabletDevice={ApplePc}
          projectLogo={LogoPicker}
          urlBackground="https://css-effects-gallery.vercel.app/color-spin.html"
          title="Ultimate Color Picker"
          description="¡Os pre&shy;sen&shy;to a la Rotom-dex! Sí, o&shy;tra Poke-Api, lo sé, pe&shy;ro co&shy;mo un fri&shy;ki de Po&shy;ké&shy;mon des&shy;de pe&shy;que&shy;ño, no pu&shy;de e&shy;vi&shy;tar&shy;lo. Lo que ha&shy;ce di&shy;fe&shy;ren&shy;te a mi PokeDex es la in&shy;ter&shy;faz ins&shy;pi&shy;ra&shy;da en el a&shy;ni&shy;me y las a&shy;ni&shy;ma&shy;cio&shy;nes CSS u&shy;ti&shy;li&shy;zan&shy;do key&shy;fra&shy;mes"
          Technologies={["JavaScript", "HTML5", "CSS", "CSS Animations", "KeyFrames", "Fetch Poke-API"]}
          urlSite="https://rotom-poke-dex.vercel.app/pokedex.html"
          urlCode="https://github.com/ejemplo/proyecto2https://github.com/AlbertoDiazEsteban/Rotom-PokeDex.git"
        />

    </div>
  );
}



 












