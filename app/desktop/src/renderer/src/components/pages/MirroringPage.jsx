import { useNavigate } from 'react-router-dom'

import Header from '../layout/Header.jsx'
import Footer from '../layout/Footer.jsx'

import seta from '../../assets/seta-esquerda.png'

import styles from './MirroringPage.module.css'

function MirroringPage(){
    const navigate = useNavigate()

    return(
        <>
            <Header/>
            
            <main className={styles.main}>
                <a href="/" className={styles.link}>
                    <img src={seta} alt="Arrow. Come back to the home page." className={styles.img}/>
                </a>

                <div className={styles.codeContainer}>
                    <p className={styles.codeTitle}>Connection code</p>
                    <p className={styles.code}>H1DE4H556H9O0OD</p>
                </div>

                <div className={styles.devicesContainer}>
                    <p className={styles.devicesTitle}>Connected devices</p>
                </div>
            </main>

            <Footer/>
        </>
    )
}

export default MirroringPage