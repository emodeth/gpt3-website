import "./features.scss";
import Feature from "../feature/Feature";

function Features() {
  return (
    <div className="features">
      <div className="features__container">
        <div className="features__header">
          <h1>
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="features__features">
          <Feature
            direction="row"
            title="Improving end distrusts instantly"
            content="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          />
          <Feature
            direction="row"
            title="Become the tended active"
            content="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          />
          <Feature
            direction="row"
            title="Message or am nothing"
            content="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          />
          <Feature
            direction="row"
            title="Really boy law county"
            content="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
