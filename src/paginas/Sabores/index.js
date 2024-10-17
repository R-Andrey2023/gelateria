import React from 'react'
import Topo from '../componentes/Topo';
import Rodape from '../componentes/Rodape';
import BannerSabores from './mainSabores/bannerSabores';
import ConteudoSabores from './mainSabores/conteudoSabores';

export default function Sabores(){
    return(
     <>
       
       <BannerSabores/>
       <ConteudoSabores/>
       
     </>
    );
};