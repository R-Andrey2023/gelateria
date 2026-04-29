import React from 'react';
import Image from 'next/image';
import MolduraHome from '../../moldura-secoes-home/index';


export default function SobreHome(){
  return(
    <MolduraHome>
       <Image src="/assets/sobre-image.jpg" alt="sobre" width={626} height={417} />

       <div>
        <div>
         <h2>SOBRE NÓS</h2>
         <h4>Alegria em cada casquinha</h4>
        </div>
         <p>
             Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado
             produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa.
             Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da 
             cidade.
        </p>
       </div>


    </MolduraHome> 
  );

};