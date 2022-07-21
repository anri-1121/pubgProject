import "./Footer.scss";
import locationIcon from "../img/location.png";
import phoneIcon from "../img/phone.png";
import emailIcon from "../img/email.png";
import facebookIcon from "../img/facebook.png";
import websiteIcon from "../img/website.png";

import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer
      className="footer"
      style={{
        background: `linear-gradient(160deg, rgb(8, 15, 19) 35%, rgb(39, 46, 51) 100%, ${props.bgLinear} 100%`,
      }}
    >
      <div className="contact_block">
        <div className="locationPlace">
          <div className="icon_block">
            <img src={locationIcon} alt="" />
          </div>
          <span className="st_address">St. Cotne Dadiani</span>
          <a href="https://www.google.com/maps/d/viewer?ie=UTF8&msa=0&ll=42.50097907803026%2C41.84956727985563&spn=0.442588%2C1.234589&t=h&z=18&mid=1fEnxAOsZ1RguP90vArZzmRoel7U">
            <span className="loc_address">Georgia, Zugdidi</span>
          </a>
        </div>
        <div className="phonePlace">
          <div className="icon_block">
            <img src={phoneIcon} alt="" />
          </div>
          <span className="phone_number">
            <a href="tel:+599303545">+599 30 35 45</a>
          </span>
        </div>
        <div className="emailPlace">
          <div className="icon_block">
            <img src={emailIcon} alt="" />
          </div>
          <span className="email">
            <a href="mailto:anriqadzanaia922@gmail.com">
              anriqadzania922@gmail.com
            </a>
          </span>
        </div>
      </div>
      <div className="quick_navigation">
        <h1>Overiew</h1>
        <ul className="footer_nav">
          <Link to="/">
            <li>Main Page</li>
          </Link>
          <Link to="/Europe">
            <li>Europe Page</li>
          </Link>
          <Link to="/Russia">
            <li>Russia Page</li>
          </Link>
          <Link to="/Arabia">
            <li>Arabia Page</li>
          </Link>
          <Link to="/Georgia">
            <li>Georgia Page</li>
          </Link>
          <Link to="/lives">
            <li>Live/Stream Page</li>
          </Link>
        </ul>
      </div>
      <div className="aboutPlace">
        <h1>About the project</h1>
        <div className="describe">
          <p>
            We are a team of developers who provide a comfortable environment
            for gamers. On this site you can see all teams participating in
            tournaments in one or another country, their statistics according to
            tournaments, etc. We hope we were able to create a comfortable and
            pleasant environment.
          </p>
        </div>
      </div>
      <div className="socialmediaPlace">
        <a href="https://www.facebook.com/anduge2022" target="blank">
          <div className="social_icon">
            <img src={facebookIcon} alt="" />
          </div>
        </a>
        <a href="http://andu.ge/cgi-sys/suspendedpage.cgi" target="blank">
          <div className="social_icon">
            <img src={websiteIcon} alt="" />
          </div>
        </a>
        <h3>@2022|Andu.ge</h3>
      </div>
    </footer>
  );
};

export default Footer;
