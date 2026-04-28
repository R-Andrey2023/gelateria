import Image from 'next/image'
import estilos from "../../../styles/styles/estilos-pagina-sabores/pageSabores.module.css";

export default function CardsSabores({image, nomeSabor, descricao}){
    return(
       <div className = {estilos.cards}>
           <Image src={image} alt={nomeSabor} width={300} height={400}/>

           <h3>{nomeSabor}</h3>

           <p>{descricao}</p>

       </div>
    );
};