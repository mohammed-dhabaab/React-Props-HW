import "./footer.css"
import twitterSvg from "../../assets/soical-icons/twitter-icon.svg"
import youtubeSvg from "../../assets/soical-icons/youtube-icon.svg"
import snapchatSvg from "../../assets/soical-icons/snapchat-icon.svg"
import linkedinSvg from "../../assets/soical-icons/linkedin-icon.svg"
import logoImage from "../../assets/logo/logo-2.svg"
import logoImageLight from "../../assets/logo/logo-light.png"
function Footer() {
    return (
        <footer className="footer">
            <div className="section-container">
                <div className="footer-main-container">
                    <a href="#" className="footer-logo-container">
                        <img src={logoImageLight} alt="Logo" className="footer-logo-image" />
                    </a>

                    <div className="footer-navbar">
                        <ul className="footer-navbar-list">
                            <li className="footer-navbar-item"><a href="#" className="footer-navbar-link">الشروط والأحكام</a></li>
                            <li className="footer-navbar-item"><a href="#" className="footer-navbar-link">سياسة الخصوصية</a></li>
                        </ul>
                        <ul className="footer-navbar-list">
                            <li className="footer-navbar-item"><a href="#" className="footer-navbar-link">شارك كمدرب</a></li>
                            <li className="footer-navbar-item"><a href="#" className="footer-navbar-link">حول الأكاديمية</a></li>
                        </ul>
                    </div>

                    <div className="footer-social-links-container">
                        <ul className="social-links-list">
                            <li className="social-item"><a href="#" className="social-link"><svg width="24" height="24" fill="#fff" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512"><path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0zm104.932 160.621a250.428 250.428 0 00-62.383-19.182 173.883 173.883 0 00-7.966 16.243 232.557 232.557 0 00-34.619-2.603c-11.569 0-23.195.879-34.622 2.58-2.334-5.509-5.044-10.971-7.986-16.223a252.58 252.58 0 00-62.397 19.222c-39.483 58.408-50.183 115.357-44.833 171.497a251.49 251.49 0 0076.502 38.398c6.169-8.327 11.695-17.192 16.386-26.417a161.682 161.682 0 01-25.813-12.319c2.164-1.569 4.281-3.186 6.325-4.756 23.912 11.231 50.039 17.088 76.473 17.088 26.436 0 52.562-5.857 76.475-17.089 2.069 1.688 4.186 3.305 6.325 4.755a162.693 162.693 0 01-25.86 12.352 183.969 183.969 0 0016.387 26.397 250.498 250.498 0 0076.553-38.392l-.006.007c6.277-65.104-10.725-121.53-44.941-171.558zM205.78 297.63c-14.908 0-27.226-13.53-27.226-30.175 0-16.645 11.889-30.293 27.178-30.293 15.29 0 27.511 13.648 27.25 30.293-.262 16.645-12.008 30.175-27.202 30.175zm100.439 0c-14.933 0-27.202-13.53-27.202-30.175 0-16.645 11.889-30.293 27.202-30.293 15.313 0 27.44 13.648 27.178 30.293-.261 16.645-11.984 30.175-27.178 30.175z" /></svg></a></li>
                            <li className="social-item"><a href="#" className="social-link"><img src={twitterSvg} alt="Twitter" className="social-link-image" /></a></li>
                            <li className="social-item"><a href="#" className="social-link"><img src={youtubeSvg} alt="Youtube" className="social-link-image" /></a></li>
                            <li className="social-item"><a href="#" className="social-link"><img src={snapchatSvg} alt="Snapchat" className="social-link-image" /></a></li>
                            <li className="social-item"><a href="#" className="social-link"><img src={linkedinSvg} alt="LinkedIn" className="social-link-image" /></a></li>
                        </ul>
                        <p className="social-links-id">@TuwaiqAcademy</p>
                    </div>

                    <div className="footer-logo-2-container">
                        <img src={logoImage} alt="Logo" className="footer-logo-image" />
                    </div>
                </div>
                <p className="copy-right">جميع الحقوق محفوظة لأكاديمية طويق 2024</p>
            </div>
        </footer>
    )
}

export default Footer