import Link from 'next/link'
import Navbar from './components/navbar'

export default function About() {
    return(
        <>

            <Navbar/>

            <h1>Página de `about`</h1>

            <Link href="/"><a>Home</a></Link>

        </>
    )
}
