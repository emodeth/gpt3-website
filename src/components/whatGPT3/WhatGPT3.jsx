import "./whatgpt3.scss";
import Feature from "../feature/Feature";

function WhatGPT3() {
  return (
    <div className="what-gpt-3" id="what-is-gpt">
      <div className="what-gpt-3__container">
        <Feature
          direction="row"
          title="What is GPT-3"
          content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
        <div className="what-gpt-3__header">
          <h1>The possibilities are beyond your imagination</h1>
          <p>Explore The Library</p>
        </div>
        <div className="what-gpt-3__features">
          <Feature
            direction="column"
            title="Chatbots"
            content="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          />
          <Feature
            direction="column"
            title="Knowledgebase"
            content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Feature
            direction="column"
            title="Education"
            content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatGPT3;
