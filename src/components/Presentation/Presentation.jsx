import React from 'react'
import '../Variables/General.css';
import '../Presentation/Presentation.css';

export const Presentation = () => {
  return (
    <section className="presentation" id='about'>
        <div className='circle'></div>
        <div>
            <h2>
                <b className='icon-left'>✌️</b>
                <b>Hola</b>, soy <b>Alberto Díaz!</b>
                <b className='icon-right'>✌️</b>
            </h2>   
            <br />
            <h3><b>De&shy;sa&shy;rro&shy;lla&shy;dor Web</b> y <br className='salto'/> <i>&shy;Di&shy;se&shy;ña&shy;dor Grá&shy;fi&shy;co</i></h3>
            <p><q>Me en&shy;can&shy;ta a&shy;fron&shy;tar <i>desafíos</i> y
            <br/>en&shy;con&shy;trar <b>So&shy;lu&shy;cio&shy;nes <i>I&shy;nno&shy;va&shy;do&shy;ras</i></b></q>.</p>

            {/* <h2><b>Hi</b>, I'm <b>Alberto Díaz!</b> ✌️</h2>
            <h3><b>Web developer</b> and <i>Designer</i> *</h3>
            <p><q>Pasionate about turning chalenges
            <br/>into <b>Innovate Solutions</b></q>.</p> */}

            <div className='btn-container'>
                <button className="action-btn">
                    <a href="https://drive.google.com/file/d/1Cs90oNco_FZLG8USOM5Win-rWWXXp6X9/view?usp=sharing" target="_blank" rel="noreferrer" className="normal-btn">Visita mi CV</a>
                </button>
                <button className="normal-btn">
                    <a href="mailto:albertodiazesteban@gmail.com" className="normal-btn">Enviar e-mail</a>
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
