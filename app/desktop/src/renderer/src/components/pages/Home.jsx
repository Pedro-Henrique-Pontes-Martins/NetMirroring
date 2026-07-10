import { useNavigate } from 'react-router-dom'

import Header from '../layout/Header.jsx'
import Footer from '../layout/Footer.jsx'

import homeImg from '../../assets/cellphoneAndPC-Image.png'

function Home(){
    const navigate = useNavigate()

    return (
        <>
            <Header/>
            
            <main>
                <img src={homeImg} alt="Image of a cellphone and computer" />

                <div>
                    <button onClick={() => {navigate("/MirrorScreen")}}>Mirror Screen</button>
                    <button onClick={() => {navigate("/ConnectDevice")}}>Connect Device</button>
                </div>
            </main>

            <Footer/>
        </>
    )
}
export default Home