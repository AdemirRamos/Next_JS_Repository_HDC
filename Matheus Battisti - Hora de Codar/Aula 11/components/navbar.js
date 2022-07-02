import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function Navbar() {
    return(
        <>
        
            <ul className={styles.navbar}>

                <li>

                    <Link href="/products"><a>Produtos</a></Link>

                </li>

                <li>

                    <Link href="/about"><a>About</a></Link>

                </li>

                <li>

                    <Link href="/"><a>Home</a></Link>

                </li>

                <li>

                    <Link href="/context"><a>Contexto</a></Link>

                </li>

            </ul>
        
        </>
    )
}
