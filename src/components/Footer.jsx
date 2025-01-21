import './Style/Footer.css';

const Footer = () => (
  <div className="footer-container">
    <div className="footer-box">
      <img
        src="https://plus.unsplash.com/premium_photo-1695716658604-b810d4827143?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww"
        alt='logo'
      />
      <h2>Address:Lagos State, Nigeria.</h2>
      
      
    </div>
    <div className="footer-box">
      <h2>About ErrandBuddy</h2>
      <h2>Contact Us</h2>
    </div>
    <div className="footer-box">
    <h2>Contact Person: ErrandBuddy</h2>
    <h2>
        Email: <a href="mailto:errandbuddy01@gmail.com">errandbuddy01@gmail.com</a>
      </h2>
      
    </div>
    
    <div className="footer-box">
      <h2>Privacy Policy</h2>
      <h2>Terms of Service</h2>
    </div>
  </div>
);

export default Footer;
