import { useNavigate } from 'react-router-dom'

import Header from '../layout/Header.jsx'
import Footer from '../layout/Footer.jsx'

import seta from '../../assets/seta-esquerda.png'

function MirroringPage(){
    const navigate = useNavigate()

    return(
        <>
            <Header/>
            
            <main>
                <a href="/">
                    <img src={seta} alt="Arrow. Come back to the home page." />
                </a>

                <div>
                    <p>Connection code</p>
                    <p>H1DE4H556H9O0OD</p>
                </div>

                <div>
                    <p>Connected devices</p>
                </div>
            </main>

            <Footer/>
        </>
    )
}

export default MirroringPage