import "./index.css";
import Card from "./Card";
import Heading from "./../../Headding";
import pic1 from "../../images/popularCollection/banner02.jpg";
import pic2 from "../../images/popularCollection/banner03.jpg";
import pic3 from "../../images/popularCollection/banner04.jpg";
import pic4 from "../../images/popularCollection/banner05.jpg";

function Collection(props) {
  return (
    <>
      <section className="popular-collection mt-5">
        <Heading title="Popular collections" />

        <div className="container-card">
          <Card src={pic1} subTitle="Jewelry Bracelets" />
          <Card src={pic2} subTitle="Jewelry Rings" />
          <Card src={pic3} subTitle="Jewelry Pedants" />
          <Card src={pic4} subTitle="Jewelry Necklaces" />
        </div>
      </section>
    </>
  );
}
export default Collection;
