import { useNavigate } from 'react-router-dom'

import Header from '../layout/Header.jsx'
import Footer from '../layout/Footer.jsx'

import seta from '../../assets/seta-esquerda.png'

import styles from './ConnectionPage.module.css'

function ConnectionPage(){

    return(
        <>
            <Header/>
            
            <main className={styles.main}>
                <a href="/" className={styles.link}>
                    <img src={seta} alt="Arrow. Come back to the home page." className={styles.img}/>
                </a>

                <div className={styles.formsContainer}>
                    <label htmlFor="code" className={styles.label}>Enter the connection code:</label>
                    <input type="text" id='code' className={styles.input}/>
                    <button className={styles.button}>Connect device</button>
                </div>
            </main>

            <Footer/>
        </>
    )
}

export default ConnectionPage