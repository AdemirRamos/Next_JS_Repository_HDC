import Link from 'next/link'
import Navbar from '../../../Matheus Battisti - Hora de Codar/Aula 07/components/navbar'

export default function Produtos() {
    return(
        <>

            <Navbar/>

            <h1>Produtos</h1>
            
            <p>Os produtos serão mostrados aqui.</p>

            <Link href="/"><a>Home</a></Link>
        
        </>
    )
}
