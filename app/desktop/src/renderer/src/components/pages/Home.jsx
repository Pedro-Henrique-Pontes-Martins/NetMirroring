import { useNavigate } from 'react-router-dom'

import Header from '../layout/Header.jsx'
import Footer from '../layout/Footer.jsx'

import homeImg from '../../assets/cellphoneAndPC-Image.png'

import styles from './Home.module.css'

function Home(){
    const navigate = useNavigate()

    return (
        <>
            <Header/>
            
            <main className={styles.main}>
                <img src={homeImg} alt="Image of a cellphone and computer" className={styles.img}/>

                <div className={styles.buttonsContainer}>
                    <button onClick={() => {navigate("/MirrorScreen")}} className={styles.button}>Mirror Screen</button>
                    <button onClick={() => {navigate("/ConnectDevice")}} className={styles.button}>Connect Device</button>
                </div>
            </main>

            <Footer/>
        </>
    )
}
export default Home