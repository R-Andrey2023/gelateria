import React from "react";
import estilos from "../../../styles/styles/topo.module.css";

export default function Topo({eventoHome, eventoSabores, eventoSobre }){
    return(
        <header className={estilos.topo}>
            <div className={estilos.containerTopo}>
                <img src = "assets/logo.png" alt = 'logo-sorveteria'/>

                <nav>
                    <button onClick={eventoHome}>Home</button>
                    <button onClick={eventoSabores}>Sabores</button>
                    <button onClick={eventoSobre} >Sobre</button>
                </nav>
            </div>
        </header>
    );
};