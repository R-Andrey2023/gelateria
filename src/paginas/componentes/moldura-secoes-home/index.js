import React from 'react';
import estilos from "../../../styles/styles/Home.module.css";


export default function MolduraHome(props){
  return(
    <section className={estilos.molduraSecoes}>
        {props.children}
    </section>
  );

};