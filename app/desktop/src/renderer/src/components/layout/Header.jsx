import { useNavigate } from "react-router-dom";
import netMirroring from '../../assets/netMirroring-Icon.png'

function Header(){
    const navigate = useNavigate()

    return(
        <>
            <header>
                <div>
                    <img src={netMirroring} alt="NetMirroring icon" />
                    <p>NetMirroring</p>
                </div>

                <button onClick={() => {navigate("/HowToUse")}}>How to use</button>
            </header>
        </>
    )
}

export default Header