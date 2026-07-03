import githubSybol from '../../assets/github-Icon.png'

function Footer(){
    return(
        <footer>
            <a href="https://github.com/Pedro-Henrique-Pontes-Martins/NetMirroring" target="_blank">
                <img src={githubSybol} alt="github symbol"/>
                <p>Learn More</p>
            </a>

            <p>Copyright 2026 &copy; Pedro Martins</p>
        </footer>
    )
}
export default Footer