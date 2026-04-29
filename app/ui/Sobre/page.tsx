import BannerSobre from "./banner-sobre";
import Image from 'next/image';
import estilos from '../../styles/styles/estilosSobre/estilos-secao-sobre.module.css';

export default function SobrePagina(){
    return(
      <>
       <BannerSobre/>
       <section className={estilos.paginaSobre}>
        <div className={estilos.textoSobre}>
         <div>
           <h2>Sobre Nós</h2>
           <h4>Nós simplesmente amamos sorvete!</h4>
         </div>
         <p>
          Somos uma empresa apaixonada pelo que faz. Colocamos 
          amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos 
          clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores
          matérias-primas para a produção final do sorvete. Vendemos tanto para
          varejo como para atacado.
          Nossos clientes podem comprar os nossos sorvetes e 
          degustar na nossa loja ou levar para sua residência e aproveitar junto com a família.
          Também vendemos para estabelecimentos e criamos eventos como festa de aniversário,
          formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar 
          em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos 
          para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
        </p>
      </div>

      <div className={estilos.imagensSobre}>
          <Image src = '/assets/sobre-image.jpg' alt="pessoas-brindando" width={626} height={417}/>
          <Image src = '/assets/sorveteria.jpg' alt="balcao-sorveteria" width={626} height={417}/>
      </div>

       </section>
       
      </>
    );
};