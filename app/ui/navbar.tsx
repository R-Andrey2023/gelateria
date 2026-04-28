import estilos from "../styles/styles/topo.module.css";
import Image from 'next/image'
import Link from 'next/link'

export default function Topo(){
    return(
        <header className={estilos.topo}>
            <div className={estilos.containerTopo}>
                <Image src="/assets/logo.png" alt = 'logo-sorveteria' width={100} height={100}/>

                <nav>
                    <Link href = "/">Home</Link>
                    <Link href="/ui/Sabores">Sabores</Link>
                    <Link href="/ui/Sobre" >Sobre</Link>
                </nav>
            </div>
        </header>
    );
};