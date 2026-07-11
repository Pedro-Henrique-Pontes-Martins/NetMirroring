import { useNavigate } from 'react-router-dom'

import Header from '../layout/Header.jsx'
import Footer from '../layout/Footer.jsx'

import seta from '../../assets/seta-esquerda.png'

function ConnectionPage(){

    return(
        <>
            <Header/>
                <a href="/">
                    <img src={seta} alt="Arrow. Come back to the home page." />
                </a>

                <div>
                    <label htmlFor="code">Enter the connection code:</label>
                    <input type="text" id='code'/>
                    <button>Connect device</button>
                </div>
            <Footer/>
        </>
    )
}

export default ConnectionPage