import React from 'react'
import '../Variables/General.css';
import '../Presentation/Presentation.css';

export const Presentation = () => {
  return (
    <section className="presentation">
        <div>
            <h2><b>Hola</b>, soy <b>Alberto Díaz!</b> ✌️</h2>
            <h3><b>De&shy;sa&shy;rro&shy;lla&shy;dor Web</b> y <i>&shy;Di&shy;se&shy;ña&shy;dor Grá&shy;fi&shy;co</i></h3>
            <p><q>Me en&shy;can&shy;ta a&shy;fron&shy;tar <i>desafíos</i> y
            <br/>en&shy;con&shy;trar <b>So&shy;lu&shy;cio&shy;nes <i>I&shy;nno&shy;va&shy;do&shy;ras</i></b></q>.</p>

            {/* <h2><b>Hi</b>, I'm <b>Alberto Díaz!</b> ✌️</h2>
            <h3><b>Web developer</b> and <i>Designer</i> *</h3>
            <p><q>Pasionate about turning chalenges
            <br/>into <b>Innovate Solutions</b></q>.</p> */}

            <div>
                <button className="action-btn">Sobre mí</button>
                <button className="normal-btn">
                    <a href="https://drive.google.com/file/d/1wN4VYopiMolUfZ-F9_5Xbr3RLDEGaRSb/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="normal-btn">Visita mi CV</a>
                </button>

                {/* <button className="action-btn">More About Me</button>
                <button className="normal-btn">Contact Me</button> */}

            </div>
        </div>

        <div className="duck-animation">
            <div className="duck">
                  <div className="duck_inner">
                      <div className="hair">
                          <div className="hair-1"></div>
                          <div className="hair-2"></div>
                      </div>
                      <div className="blush"></div>
                      <div className="pico-top"></div> 
                      <div className="pico"></div>
                      <div className="eye">
                          <div className="eye-shyne"></div>
                          <div className="dot dot-top"></div>
                          <div className="dot dot-bottom"></div>
                      </div>
                      <div className="wing"></div>
                      <div className="duck_head"></div>
                      <div className="duck_body"></div>
                      <div className="pata pata-1">
                          <div className="leg"></div>
                          <div className="foot"></div>
                      </div>
                      <div className="pata pata-2">
                          <div className="leg"></div>
                          <div className="foot"></div>
                      </div>
                  </div>

            </div>
        </div>
    </section>
  )
}
