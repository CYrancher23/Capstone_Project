import "./Footer.scss"
import {Link} from "react-router-dom";

function Footer () {
    
        return (
            <div className="footer">
                <div>
                    <h1 className="footer__name">CY Ranch Holdings, LLC</h1>
                    <p className="footer__address">327 CR 4211</p>
                    <p className="footer__address">Bonham, Texas 75418</p>
                    <p className="footer__email">cyranchllc@gmail.com</p>
                </div>
                <div>
                    <Link className="footer__link" to="/livestock"><p className="footer__text">Livestock</p></Link>
                    <Link className="footer__link" to="/hay"><p className="footer__text">Hay</p></Link>
                    <Link className="footer__link" to="/aboutUs"><p className="footer__text">About The CY Ranch</p></Link>
                    <Link className="footer__link" to="/contactUs"><p className="footer__text">Contact Us</p></Link>
                    <Link className="footer__link" to="/affiliates"><p className="footer__text">Affiliates</p></Link>
                    <Link className="footer__link" to="/employee"><p className="footer__text">Employee Sign-in</p></Link>
                </div>
            </div>
        )
    }



export default Footer