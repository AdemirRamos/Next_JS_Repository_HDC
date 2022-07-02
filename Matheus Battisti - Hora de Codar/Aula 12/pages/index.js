import styles from '../styles/Home.module.css'
import Head from 'next/head'

//Na "tag meta name='keywords'" vão as palavras-chaves para se chegar até a nossa página. - As palavras-chaves ficam dentro de "commit". 
//Já na "tag meta name='description'" seguimos a mesma lógica, porém em relação à descrição da página.

import Image from 'next/image'

//O Next sugere o uso do componente "Image" para a aplicação de imagens ao projeto;
//Os três primeiros argumentos usados no container "Image" são obrigatórios.

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

      <Image src="./public/images/p1.jpg" width="200" height="200" alt="Uma imagem de algumas flores."/>
    </>
  )
}
