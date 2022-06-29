import Navbar from './navbar'
import Footer from './footer'

export default function Main_component({children}) {
    return(
        <>
        
            <Navbar/>

            <div>

                {children}

            </div>

            <Footer/>
        
        </>
    )
}
