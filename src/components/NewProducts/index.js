import "./index.css";
import CardProduct from "./CardProdct";
import pic1 from "../../images/new-product/01__52909.jpg";
import pic2 from "../../images/new-product/02__71434.jpg";
import pic3 from "../../images/new-product/03__13693.jpg";
import pic4 from "../../images/new-product/04__32061.jpg";
import pic5 from "../../images/new-product/05__86689.jpg";
import pic6 from "../../images/new-product/13__75109.jpg";
import Heading from "../../Headding";

function NewProduct() {
  return (
    <section className="new-product mb-5 ">
      <Heading title="New Products" />

      <div className="container-card">
        <CardProduct src={pic1} title="Smith Journal 13" price="22" />
        <CardProduct src={pic2} title="Dustpan & Brush" price="32.95" />
        <CardProduct src={pic3} title="Utility Caddy" price="45.95" />
        <CardProduct src={pic4} title="Canvas Laundry Cart" price="200.00" />
        <CardProduct src={pic5} title="Laundry Detergent" price="29.95" />
        <CardProduct src={pic6} title="Tiered Wire Basket" price="119.95" />
      </div>
    </section>
  );
}

export default NewProduct;
