function Card(props) {
  return (
    <div className="card">
      <img src={props.src} className="card-img-top" alt="..." />
      <figcaption className="figcaption">
        <div className="figcaption-body">
          <h4 className="figcaption-title">{props.subTitle}</h4>

          <div className="figcaption-text">See The Collection</div>
        </div>
      </figcaption>
    </div>
  );
}

export default Card;
