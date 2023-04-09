function CardProduct(props) {
  return (
    <div className="card">
      <img src={props.src} className="card-img-top" alt="..." />
      <div className="card-body ">
        <div className="card-body__icons text-center">
          <i class="fa fa-cart-plus" aria-hidden="true"></i>
        </div>
        <div className="card-icon">{/* icons */}</div>
        <div className="card-body__card-details">
          <p className="card-details__subtitle">[Sample] {props.title}</p>
          <p className="card-details__price">$ {props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
