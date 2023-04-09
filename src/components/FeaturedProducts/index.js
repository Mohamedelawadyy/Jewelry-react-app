import "./index.css";
import Heading from "../../Headding";
// import CardProduct from "../NewProducts/CardProdct";
import pic1 from "../../images/featured/01__52909.jpg";
import pic2 from "../../images/featured/02__71434.jpg";
import pic3 from "../../images/featured/05__86689.jpg";
import pic4 from "../../images/featured/06__14965.jpg";
import pic5 from "../../images/featured/07__09779.jpg";
import pic6 from "../../images/featured/13__75109.jpg";

function CardFeatured(props) {
  const { items } = props;
  console.log(items);
  let theItems = items.map((item) => {
    return (
      <div className="card" key={Math.random() * 10}>
        <img src={item.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="card-body__icons text-center">
            <i class="fa fa-cart-plus" aria-hidden="true"></i>
          </div>
          <div className="card-icon">{/* icons */}</div>
          <div className="card-body__card-details">
            <p className="card-details__subtitle">[Sample] {item.subtitle}</p>
            <p className="card-details__price">$ {item.price}</p>
          </div>
        </div>
      </div>
    );
  });
  return theItems;
}

function FeaturedProducts() {
  let state = {
    items: [
      {
        src: pic1,
        subtitle: "[Sample] Smith Journal 13",
        price: 20,
      },
      {
        src: pic2,
        subtitle: "[Sample] Dustpan Brush",
        price: 33.95,
      },
      {
        src: pic3,
        subtitle: "[Sample] Utility Caddy",
        price: 45.95,
      },
      {
        src: pic4,
        subtitle: "[Sample] Canvas Laundry Carl",
        price: 200,
      },
      {
        src: pic5,
        subtitle: "[Sample] Tiered Wire Basket",
        price: 50,
      },
      {
        src: pic6,
        subtitle: "[Sample] Oak Cheese Grater",
        price: 80,
      },
    ],
  };

  return (
    <>
      <div className="container-featured">
        <Heading title="Featured Products" />
        <div className="container-featured__cards">
          <CardFeatured items={state.items} />
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
