import "./header.scss";
import imgAI from "../../assets/ai.png";
import imgPeople from "../../assets/people.png";

function Header() {
  return (
    <div className="header" id="home">
      <div className="header__container">
        <div className="header__content">
          <h1 className="header__header">
            Let's Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="header__description">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <form className="header__form">
            <input className="header__input" placeholder="Your Email Address" />
            <button className="header__button">Get Started</button>
          </form>
          <div className="header__people">
            <img
              className="header__people-image"
              src={imgPeople}
              alt="people"
            />
            <p className="header__request">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <img className="header__ai-image" src={imgAI} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
