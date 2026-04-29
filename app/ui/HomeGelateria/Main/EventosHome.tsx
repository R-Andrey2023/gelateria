import React from 'react';
import Image from 'next/image';
import MolduraHome from '../../moldura-secoes-home/index';


export default function EventosHome(){
  return(
     <MolduraHome>
       <div>
        <div>
          <h2>NOSSOS EVENTOS</h2>
          <h4>Delícia com sorvetes</h4>
       </div>
          <p>
            Mais do que uma sorveteria, uma extensão da sua 
            casa! Estamos aqui prontinhos para te atender e oferecer os melhores 
            eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar 
            um tempo aqui com a gente.
         </p>

       </div>

       <Image src="/assets/eventos-image.jpg"  alt="eventos" width={900} height={600} />


     </MolduraHome>

  );

};