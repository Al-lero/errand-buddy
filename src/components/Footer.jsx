import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import './Style/Footer.css';

const Footer = () => (
    <div className="footer-container">
        <div className="footer-box">
            <FontAwesomeIcon icon={faLocationPin} className="location-icon" />
            <h2>Address: Lagos State, Nigeria.</h2>
        </div>
        <div className="footer-box">
            <h2>About ErrandBuddy</h2>
            <h2>Contact Us</h2>
        </div>
        <div className="footer-box">
            <h2>Contact Person: ErrandBuddy</h2>
            <h2>Email: <a href="mailto:errandbuddy01@gmail.com">errandbuddy01@gmail.com</a></h2>
        </div>
        <div className="footer-box">
            <h2>Privacy Policy</h2>
            <h2>Terms of Service</h2>
        </div>
    </div>
);

export default Footer;
