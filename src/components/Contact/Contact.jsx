import React, { useEffect } from 'react';
import '../Variables/General.css';
import '../Contact/Contact.css';
import { LogoChat, LogoPato } from '../assets/Logo'


export const Contact = () => {

  useEffect(() => {
    const toggleChatShow = document.getElementById('toggleChatShow');
    const toggleChatClose = document.getElementById('toggleChatClose');
    const contactChat = document.getElementById('contact-chat');

    const ChatShow = () => {
      if (toggleChatShow.checked) {
        contactChat.classList.add('active');
      } else {
        contactChat.classList.add('active');
      }
    };

    const ChatClose = () => {
      if (toggleChatClose.checked) {
        contactChat.classList.remove('active');
      } else {
        contactChat.classList.remove('active');
      }
    };

    toggleChatShow.addEventListener('change', ChatShow);
    toggleChatClose.addEventListener('change', ChatClose);
  }, []);
  

  return (
    <section className="contact" id="contact">
        <div className="contact-btn" id="showChatBtn">
            <input type="checkbox" id="toggleChatShow"/>
            <LogoChat />
        </div>
        <div id="contact-chat" className="contact-chat">
            <div className="header-contact">
                <LogoPato />
                <p>Contacto</p>
                <div className="close">
                    <input type="checkbox" id="toggleChatClose"/>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="chat-body">
                <form action="#" method="POST">
                    <label for="nombre">Nombre completo:</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre completo" required/>
    
                    <label for="correo">Correo electrónico:</label>
                    <input type="email" id="correo" name="correo" placeholder="correo@example.com" required/>

                    <label for="asunto">Asunto:</label>
                    <input type="text" id="asunto" name="asunto" placeholder="Escribe el asunto aquí" required/>
    
                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí"></textarea>
                    <hr/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>

    </section>
  );
};







  // useEffect(() => {
  //   const toggleChatShow = document.getElementById('toggleChatShow');
  //   const toggleChatClose = document.querySelector('#contact-chat');
  //   const contactChat = document.querySelector('#toggleChatClose');

  //   toggleChatShow.addEventListener('change', function() {
  //       if (toggleChatShow.checked) {
  //           contactChat.classList.remove('chat-hide'); 
  //       } else {
  //           contactChat.classList.add('chat-hide'); 
  //       }
  //   });

  //   toggleChatClose.addEventListener('change', function() {
  //     if (toggleChatClose.checked) {
  //         contactChat.classList.add('chat-hide'); 
  //     } else {
  //         contactChat.classList.remove('chat-hide'); 
  //     }
  // });

  // }, []);