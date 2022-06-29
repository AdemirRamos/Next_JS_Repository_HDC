import styles from '../styles/Home.module.css'
import Navbar from './components/navbar' //A extensão do arquivo, facultativamente, pode ser posta ao final do nome do arquivo.

export default function Home() {
  return (
    <div className={styles.container}>

        <Navbar/>
      
        <h1>Hello, world - Next JS</h1>

    </div>
  )
}
