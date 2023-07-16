import "./brands.scss";
import atlasian from "../../assets/atlassian.png";
import google from "../../assets/google.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";

function Brands() {
  return (
    <div className="brands">
      <div className="brands__container">
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlasian} alt="atlasian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
}

export default Brands;
