import "./index.css";
import SideBar from "../SideBar";
import BlogNewProducts from "../BlogNewProducts";
import pic1 from "../../images/new-product/01__52909.jpg";
import pic2 from "../../images/new-product/02__71434.jpg";
import pic3 from "../../images/new-product/03__13693.jpg";
import BlogPosts from "../BlogPosts";

function Blog() {
  return (
    <>
      <section className="blog-sec p-5">
        <div className="blog-sec__header">
          <h1 className="text-center text-white">Blog</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <SideBar title="Categories" />
              <BlogNewProducts />
            </div>
            <div className="col-9">
              <BlogPosts src={pic1} />
              <div className="d-flex w-100">
                <BlogPosts src={pic2} />
                <BlogPosts src={pic3} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
