import React  from "react";
import estilos from "../../../styles/styles/estilos-pagina-sabores/pageSabores.module.css";

export default function CardsSabores(props){
    return(
       <div className = {estilos.cards}>
           <img src = {props.image} alt = {props.nomeSabor}/>

           <h3>{props.nomeSabor}</h3>

           <p>{props.descricao}</p>

       </div>
    );
};