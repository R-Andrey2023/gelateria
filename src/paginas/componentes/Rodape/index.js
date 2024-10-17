import React from  'react';
import estilos from '../../../styles/styles/rodape.module.css';

export default function Rodape(){
    return(
        <footer className={estilos.rodape}>
            <div className={estilos.contatos}>
               <img src="assets/logo.png" alt = "logo"/>

               <div>
                <h2>ENDEREÇO</h2>
                <p>Av. Bernardo de Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
              </div>
                

               <div>
                <h2>CONTATO</h2>
                <p>info@meusite.com</p>
                <p>São Paulo, SP 12345-678</p>
               </div>

               <div>
                <h2>HORÁRIOS</h2>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
               </div>

            </div>

            <div>
               <p>Gelateria. Orgulhosamente desenvolvido por <span>Wilson Rocha</span></p>
            </div>
        </footer>
    );
};