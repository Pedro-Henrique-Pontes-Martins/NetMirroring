import power from '../../assets/power-icon.svg'

import styles from './StreamPage.module.css'

function StreamPage(){
    
    return(
        <>
            <button className={styles.button}><img src={power} className={styles.svg} alt="power button" /></button>
            <video src="" className={styles.video}></video>
        </>
    )
}

export default StreamPage