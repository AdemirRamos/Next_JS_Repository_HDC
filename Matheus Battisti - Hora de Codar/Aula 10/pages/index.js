import styles from '../styles/Home.module.css'
import Head from 'next/head'

//Na "tag meta name='keywords'" vão as palavras-chaves para se chegar até a nossa página. - As palavras-chaves ficam dentro de "commit". 
//Já na "tag meta name='description'" seguimos a mesma lógica, porém em relação à descrição da página.

export default function Home() {
  return (
    <>
      <Head>

        <title>Página Principal</title>
        <meta name="keywords" commit="roupas, calçados, blusas"></meta>
        <meta name="description" commit="Encontre a melhor roupa para você."></meta>

      </Head>

      <div>
        
        <h1 className={styles.title}>Hello, world - Next JS</h1>

      </div>
    </>
  )
}
