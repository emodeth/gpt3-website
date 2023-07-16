import "./feature.scss";

function Feature({ direction, title, content }) {
  return (
    <div className="feature">
      <div
        className={
          direction === "row"
            ? "feature__container feature__container-r"
            : "feature__container feature__container-c"
        }
      >
        <div className="feature__header">
          <div />
          <h1>{title}</h1>
        </div>
        <p className="feature__content">{content}</p>
      </div>
    </div>
  );
}

export default Feature;
