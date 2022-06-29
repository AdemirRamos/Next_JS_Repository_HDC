import Navbar from './navbar'
import Footer from './footer'
import main_container from '../styles/main_container.module.css'

export default function Main_component({children}) {
    return(
        <>
        
            <Navbar/>

            <div className={styles.container}>

                {children}

            </div>

            <Footer/>
        
        </>
    )
}
