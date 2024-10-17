import React from 'react';
import SecaoBanner from './Main/SecaoBanner';
import SaboresHome from './Main/SaboresHome'
import EventosHome from './Main/EventosHome';
import SobreHome from './Main/SobreHome';

export default function HomeGelateria(){
    return(
    <>
     <main>
     <SecaoBanner/>
     <SaboresHome/>
     <EventosHome/>
     <SobreHome/>
     </main>
   </>
    );
};