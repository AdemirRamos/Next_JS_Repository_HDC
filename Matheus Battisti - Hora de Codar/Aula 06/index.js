import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>

        <ul>

            <li>

                <Link href="/products"><a>Produtos</a></Link>

            </li>

            <li>

                <Link href="/about"><a>About</a></Link>

            </li>

        </ul>
      
        <h1>Hello, world - Next JS</h1>

    </div>
  )
}
