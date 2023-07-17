import "./possibilities.scss";
import imgPossibility from "../../assets/possibility.png";

function Possibilities() {
  return (
    <div className="possibilities">
      <div className="possibilities__container">
        <div className="possibilities__img">
          <img src={imgPossibility} alt="possibility" />
        </div>
        <div className="possibilities__content">
          <p>Request Early Access to Get Started</p>
          <h1>The possibilities are beyond your imagination</h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p>Request Early Access to Get Started</p>
        </div>
      </div>
    </div>
  );
}

export default Possibilities;
