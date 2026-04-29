import Image from 'next/image'
import estilos from "../../../styles/styles/estilos-pagina-sabores/pageSabores.module.css";

interface CardsSaboresProps {
    image: string;
    nomeSabor: string;
    descricao: string;
}

export default function CardsSabores({image, nomeSabor, descricao}: CardsSaboresProps){
    return(
       <div className = {estilos.cards}>
           <Image src={image} alt={nomeSabor} width={300} height={400}/>

           <h3>{nomeSabor}</h3>

           <p>{descricao}</p>

       </div>
    );
};