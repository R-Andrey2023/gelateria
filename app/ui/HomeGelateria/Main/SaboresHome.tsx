import Image from 'next/image';
import MolduraHome from '../../moldura-secoes-home/index';



export default function SaboresHome(){
  return(
     <MolduraHome>
       <Image src="/assets/banner-sabores.jpg" alt="sabores" width={1024} height={675} />

       <div>
        <div>
          <h2>NOSSOS SABORES</h2>
          <h4>Novos e deliciosos</h4>
        </div>
          <p>
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos
            os nossos produtos são naturais, à base de frutas e sem nenhum conservante! 
            Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem
            como o sorvete ser delicioso e saudável ao mesmo tempo!
         </p>

       </div>
      </MolduraHome>

  );

};