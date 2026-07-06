import githubSybol from '../../assets/github-Icon.png'
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <a href="https://github.com/Pedro-Henrique-Pontes-Martins/NetMirroring" target="_blank" className={styles.link}>
                <img src={githubSybol} alt="github symbol" className={styles.img}/>
                <p className={styles.linkText}>Learn More</p>
            </a>

            <p className={styles.copyright}>Copyright 2026 &copy; Pedro Martins</p>
        </footer>
    )
}
export default Footer