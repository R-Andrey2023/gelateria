
import React, {useState} from 'react';
import Topo from '../componentes/Topo';
import Rodape from '../componentes/Rodape';
import HomeGelateria from '../HomeGelateria';
import Sabores from '../Sabores';
import Sobre from '../Sobre'

export default function PaginaCompleta(props){
   let pageHome = <HomeGelateria/>;
   let pageSabores = <Sabores/>;
   let pageSobre = <Sobre/>


   const [choicePage, setChoicePage] = useState(pageHome)
   
   function changeTo(pagina){
    setChoicePage(pagina)
  }

    return(
      <>
        <Topo
           eventoHome={() => changeTo(pageHome)}
           eventoSobre={() => changeTo(pageSobre)}
           eventoSabores={() => changeTo(pageSabores)}
          />

        {choicePage}
        
        <Rodape/>
      </>
    );
};