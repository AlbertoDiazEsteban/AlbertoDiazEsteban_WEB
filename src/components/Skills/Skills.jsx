import React from 'react'
import { LogoHtml, LogoCss, LogoSass, LogoBootstrap, LogoTailwind, LogoJavaScript, LogoTypeScript, LogoReact, LogoVite, LogoNode, LogoNpm, LogoPostman, LogoVercel, LogoSymfony, LogoPHP, LogoJAVA, LogoAFrame, LogoThree, LogoTrello, LogoNotion, LogoFigma, LogoVisual, LogoGit, LogoPhotoshop, LogoIllustrator, LogoIndesign, LogoPremiere, LogoDreamweaver, LogoAfterEffects, LogoCanva, LogoSlack, LogoBlender } from '../assets/SkillsLogo.jsx'
import '../Variables/General.css';
import '../Skills/Skills.css';

export const Skills = () => {
  return (
    <section class="skillset">
        <h1>Skillset</h1>
        <h3>Technical skills and competences</h3>
        <br/>
        <section>
            <div> <LogoHtml/> HTML</div>
            <div> <LogoCss/> CSS</div>
            <div> <LogoSass/> Sass</div>
            <div> <LogoBootstrap/> Bootstrap</div>
            <div> <LogoTailwind/> Tailwind</div>
            <div> <LogoJavaScript/> JavaScript</div>
            <div> <LogoTypeScript/> TypeScript</div>
            <div> <LogoReact/> React.js</div>
            <div> <LogoVite/> Vite</div>
            <div> <LogoNode/> Node.js</div>
            <div> <LogoNpm/> Npm</div>
            <div> <LogoPostman/> Postman</div>
            <div> <LogoVercel/> Vercel</div>
            <div> <LogoSymfony/> Symfony</div>
            <div> <LogoPHP/> PHP</div>
            <div> <LogoJAVA/> JAVA</div>
            <div> <LogoAFrame/> A-FRAME</div>
            <div> <LogoThree/> Three.js</div>
        </section>
        <hr/>
        <section>
            <div> <LogoTrello/> Trello</div>
            <div> <LogoNotion/> Notion</div>
            <div> <LogoFigma/> Figma</div>
            <div> <LogoVisual/> Visual SC</div>
            <div> <LogoGit/> Git</div>
            <div class="multiple"> 
                <section class="multiple-logos">
                    <section>
                        <LogoPhotoshop/>
                        <LogoIllustrator/>
                        <LogoIndesign/>
                    </section>
                    <section>
                        <LogoPremiere/>
                        <LogoDreamweaver/>
                        <LogoAfterEffects/>
                    </section>
                </section>
                Suite Adobe
            </div>
            <div> <LogoCanva/> Canva</div>
            <div> <LogoSlack/> Slack</div>
            <div> <LogoBlender/> Blender</div>
        </section>
    </section>
  )
}
