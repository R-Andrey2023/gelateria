import React from "react";
import estilos from "../../../styles/styles/estilos-pagina-sabores/pageSabores.module.css";

export default function BannerSabores(){
    return(
       <section className={estilos.bannerSabores}>
          <div>
              <h1>NOSSOS SABORES</h1>
          </div>
       </section>
    );
};
