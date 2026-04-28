import estilos from "../../styles/Home.module.css";


export default function MolduraHome({children}){
  return(
    <section className={estilos.molduraSecoes}>
        {children}
    </section>
  );

};