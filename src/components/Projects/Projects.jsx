import React from 'react';
import '../Variables/General.css';
import ProjectCard from './ProjectCard';
import { PokePhone, PokeTablet, ApplePhone, AppleTablet, ApplePc, LogoPoke, LogoPicker, LogoSeo, ApplePhone2 } from '../assets/CardsSvg'; 

import bgseo from '../assets/img/stars-sky.png'
import bgpoke from '../assets/img/zigzag.png'
import bgcolorpicker from '../assets/img/colors-bg.png'

export const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h1>Proyectos</h1>
      <h2>Echa un vistazo a mis últimos proyectos</h2>
      <br/>
      
      {/* <h1>Projects</h1>
      <h3>Check my last projects</h3> */}


        <ProjectCard
          title="SEO Birdlife"
          mobileDevice={ApplePhone}
          tabletDevice={AppleTablet}
          projectLogo={LogoSeo}
          rutaImgBackgroundProject={bgseo}
          description="Es&shy;ta pá&shy;gi&shy;na web in&shy;mer&shy;si&shy;va mues&shy;tra los hi&shy;tos y da&shy;tos de los úl&shy;ti&shy;mos 10 a&shy;ños de la em&shy;pre&shy;sa Seo&shy;BirdLife, una or&shy;ga&shy;ni&shy;za&shy;ción de&shy;di&shy;ca&shy;da a la con&shy;ser&shy;va&shy;ción y el es&shy;tu&shy;dio de las a&shy;ves a ni&shy;vel na&shy;cio&shy;nal en Es&shy;pa&shy;ña."
          Technologies={["JavaScript", "HTML5", "CSS", "A-Frame", "Three.js", "VR", "Gráficos 3D", "Modelado 3D"]}
          urlSite="https://seobirdlife.coderf5.es/frontend/sky-1.html"
          urlCode="https://github.com/AlbertoDiazEsteban/PorfolioReact_Fontend"
        />

        <ProjectCard
          title="Ultimate Color Picker"
          mobileDevice={ApplePhone2}
          tabletDevice={ApplePc}
          projectLogo={LogoPicker}
          rutaImgBackgroundProject={bgcolorpicker}
          description="Ul&shy;ti&shy;ma&shy;te Co&shy;lor Pic&shy;ker es u&shy;na he&shy;rra&shy;mien&shy;ta pa&shy;ra de&shy;sa&shy;rro&shy;lla&shy;do&shy;res que te per&shy;mi&shy;te cre&shy;ar y/o ac&shy;tua&shy;li&shy;zar u&shy;na pa&shy;le&shy;ta de co&shy;lo&shy;res en tiem&shy;po re&shy;al, y co&shy;pi&shy;ar va&shy;ria&shy;bles CSS/SASS al ins&shy;tan&shy;te. A&shy;gi&shy;li&shy;za tu pro&shy;ce&shy;so crea&shy;ti&shy;vo y te a&shy;se&shy;gu&shy;ra bue&shy;nas prác&shy;ti&shy;cas de có&shy;di&shy;go."
          Technologies={["JavaScript", "HTML5", "CSS", "CSS Variables"]}
          urlSite="https://color-picker-six-sigma.vercel.app/"
          urlCode="https://github.com/AlbertoDiazEsteban/Color-Picker"
        />

        <ProjectCard
          title="Rotom-Dex"
          mobileDevice={PokePhone}
          tabletDevice={PokeTablet}
          projectLogo={LogoPoke}
          rutaImgBackgroundProject={bgpoke}
          description="¡Os pre&shy;sen&shy;to a la Rotom-dex! Sí, o&shy;tra Poke-Api, lo sé, pe&shy;ro co&shy;mo un fri&shy;ki de Po&shy;ké&shy;mon des&shy;de pe&shy;que&shy;ño, no pu&shy;de e&shy;vi&shy;tar&shy;lo. Lo que ha&shy;ce di&shy;fe&shy;ren&shy;te a mi PokeDex es la in&shy;ter&shy;faz ins&shy;pi&shy;ra&shy;da en el a&shy;ni&shy;me y las a&shy;ni&shy;ma&shy;cio&shy;nes CSS u&shy;ti&shy;li&shy;zan&shy;do key&shy;fra&shy;mes"
          Technologies={["JavaScript", "HTML5", "CSS", "CSS Animations", "KeyFrames", "Fetch Poke-API"]}
          urlSite="https://rotom-poke-dex.vercel.app/pokedex.html"
          urlCode="https://github.com/AlbertoDiazEsteban/Rotom-PokeDex"
        />

    </div>
  );
}



 












