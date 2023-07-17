import "./footer.scss";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <FooterHeader />
        <FooterNav />
      </div>
    </div>
  );
}

function FooterHeader() {
  return (
    <div className="footer__header">
      <h1>Do you want to step in to the future before others</h1>
      <button>Request Early Access</button>
    </div>
  );
}

function FooterNav() {
  return (
    <div className="footer__nav">
      <div className="footer__logos">
        <img src={logo} alt="logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
      </div>
      <ul className="footer__list">
        <p>Links</p>
        <li>Overons</li>
        <li>Social Media</li>
        <li>Counters</li>
        <li>Contact</li>
      </ul>
      <ul className="footer__list">
        <p>Company</p>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Contact</li>
      </ul>
      <ul className="footer__list">
        <p>Get in touch</p>
        <li>Crechterwoord K12 182 DK Alknjkcb</li>
        <li>085-132567</li>
        <li>info@payme.net</li>
      </ul>
    </div>
  );
}

export default Footer;
