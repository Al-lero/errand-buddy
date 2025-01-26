import { useNavigate } from 'react-router-dom';
import './Style/Header.css';

const Header = () => {
  const navigate = useNavigate();
  const eagle = 'https://seeklogo.com/images/H/hawk-logo-1024EF22B9-seeklogo.com.png';


  const handleLogoClick = () => {
    navigate('/')
  }

  return (
      <header className="header-container">
        <div className="logo-container" onClick={handleLogoClick}>
          <img src={eagle} alt="Logo" className="logo" />
        </div>

        <nav className="nav-menu">
          <a href="/">Home</a>

          <div className="dropdown-container">
            <button className="dropdown-button">About ErrandBuddy</button>
            <div className="dropdown-content">
              <a href="#mission" className="nav-link">Mission</a>
              <a href="#vision" className="nav-link">Owners</a>
            </div>
          </div>

          <div className="dropdown-container">
            <button className="dropdown-button">Connect</button>
            <div className="dropdown-content">
              <a href="#AdminRegister">Register as an Admin</a>
              <a href="#UserRegister">Register as a User</a>
              <a href="#BuddyRegister">Register as a Buddy</a>
              <a href="#login">Login</a>
            </div>
          </div>

          <a href="/services-link" className="service-link">Service Link</a>
        </nav>

        <button className="enquiry-button">
          <a href="#enquiries" >ENQUIRIES</a>
        </button>
      </header>
  );
};

export default Header;
