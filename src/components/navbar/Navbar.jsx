import "./navbar.scss";
import logo from "../../assets/logo.svg";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(function () {
    function handleSticky() {
      if (window.scrollY >= 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleSticky);
  });

  return (
    <nav className={isSticky ? "navbar sticky-navbar" : "navbar"}>
      <div className="navbar__container">
        <img className="navbar__logo" src={logo} alt="logo"></img>
        <Menu />
        <div className="navbar__sign-container">
          <button className="navbar__sign-in">Sign in</button>
          <button className="navbar__sign-up">Sign Up</button>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="navbar__menu-icon-container"
        >
          <i className="fa-solid fa-bars navbar__menu-icon"></i>
        </button>
      </div>

      <div
        className={
          isOpen
            ? "navbar__mobile-container navbar__mobile-container-active"
            : "navbar__mobile-container"
        }
      >
        <button onClick={() => setIsOpen(false)}>
          <i class="fa-solid fa-xmark"></i>
        </button>

        <ul className="navbar__mobile-links">
          <li onClick={() => setIsOpen(false)} className="navbar__mobile-link">
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setIsOpen(false)} className="navbar__mobile-link">
            <a href="#what-is-gpt">What is GPT?</a>
          </li>
          <li onClick={() => setIsOpen(false)} className="navbar__mobile-link">
            <a href="#open-ai">Open AI</a>
          </li>
          <li onClick={() => setIsOpen(false)} className="navbar__mobile-link">
            <a href="#case-studies">Case Studies</a>
          </li>
          <li onClick={() => setIsOpen(false)} className="navbar__mobile-link">
            <a href="#library">Library</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

function Menu() {
  return (
    <ul className="navbar__links">
      <li className="navbar__link">
        <a href="#home">Home</a>
      </li>
      <li className="navbar__link">
        <a href="#what-is-gpt">What is GPT?</a>
      </li>
      <li className="navbar__link">
        <a href="#open-ai">Open AI</a>
      </li>
      <li className="navbar__link">
        <a href="#case-studies">Case Studies</a>
      </li>
      <li className="navbar__link">
        <a href="#library">Library</a>
      </li>
    </ul>
  );
}
