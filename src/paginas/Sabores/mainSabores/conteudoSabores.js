import React from "react";
import CardSabores from "./CardsSabores";
import estilos from '../../../styles/styles/estilos-pagina-sabores/pageSabores.module.css';

export default function ConteudoSabores(){
    return(
       <section className={estilos.secaoSabores}>
          <div>
             <h2>SABORES DE SORVETE</h2>
             <div className={estilos.conteudoSabores}>
                <CardSabores
                  image = 'assets/sabor-oreo.png'
                  nomeSabor = 'Sorvete de Óreo'
                  descricao = "Delicioso sorvete sabor óreo. Uma explosão de sabor."
                  
                />
                <CardSabores
                  image = 'assets/sabor-pistache.png'
                  nomeSabor = 'Sorvete de pistache'
                  descricao = "Cremoso sorvete sabor pistache com pedacinhos de semente."
                  
                />

                <CardSabores
                  image = 'assets/sabor-cookies-avela.png'
                  nomeSabor = 'Sorvete Cookies & Avelã'
                  descricao = "O nosso melhor sorvete. Você vai adorar o sabor."
                  
                />

                <CardSabores
                  image = 'assets/sorbet-kiwi.png'
                  nomeSabor = 'Sorvete de Kiwi'
                  descricao = "Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C."
                  
                />
                <CardSabores
                  image = 'assets/sorbet-morango.png'
                  nomeSabor = 'Sorvete de Morango'
                  descricao = "Sorvete de morango gourmet. Tradicional e saboroso."
                  
                />

                <CardSabores
                  image = 'assets/sorbet-limao.png'
                  nomeSabor = 'Sorvete de Limão Siciliano'
                  descricao = "O incrivel sorvete gourmet de limão siciliano vai te encantar."
                  
                />
             </div>
          </div>
       </section>
    );
};