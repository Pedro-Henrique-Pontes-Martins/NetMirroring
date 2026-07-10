import { useNavigate } from "react-router-dom";
import netMirroring from '../../assets/netMirroring-Icon.png'
import styles from './Header.module.css'

function Header(){
    const navigate = useNavigate()

    return(
        <>
            <header className={styles.headerContainer}>
                <div className={styles.logoContainer}>
                    <img src={netMirroring} alt="NetMirroring icon" className={styles.img}/>
                    <p className={styles.nameText}>NetMirroring</p>
                </div>

                <button onClick={() => {navigate("/HowToUse")}} className={styles.button}>How to use</button>
            </header>
        </>
    )
}

export default Header