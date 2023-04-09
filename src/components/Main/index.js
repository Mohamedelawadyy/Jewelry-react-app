import Carousel from "../Carousel";
import Collection from "../PopularCollection";
import NewProduct from "../NewProducts";
import Parallax from "../Parallax";
import parallaxPic from "../../images/parallax/shape01.png";
import FeaturedProducts from "../FeaturedProducts";
import RecentPosts from "../RecentPosts";
import Subscribe from "../Subscribe";

function Main() {
  return (
    <main>
      <Carousel />
      <Collection title="Popular Collections" />
      <NewProduct />
      <Parallax src={parallaxPic} />
      <FeaturedProducts />
      <RecentPosts />
      <Subscribe />
    </main>
  );
}

export default Main;
