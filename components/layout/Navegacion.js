import React from 'react'
import Link from 'next/link'

const Navegacion = ()=> {
    return(
        <nav>
            <Link href="/">Inicio</Link>
            <Link href="/populares">populares</Link>
            <Link href="/nuevoproducto">nuevoproducto</Link>
        </nav>
    );
    
}
export default Navegacion ;