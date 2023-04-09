import React from "react";
import pic1 from "../../images/new-product/01__52909.jpg";
import pic2 from "../../images/new-product/02__71434.jpg";
import pic3 from "../../images/new-product/03__13693.jpg";
import pic4 from "../../images/new-product/04__32061.jpg";
import pic5 from "../../images/new-product/05__86689.jpg";

function BlogNewProducts(props) {
  return (
    <div className="blog-newproducts">
      <h5>{"New Products" || props.title}</h5>
      <ul className="product-list">
        <li>
          <article className="list-item">
            <img src={pic1} alt="" />
            <div className="listItems" __body>
              <h6>{props.title || "[Sample] Smith Journal 13"}</h6>
              <p>${props.price || "22.00"}</p>
            </div>
          </article>
        </li>
        <li>
          <article className="list-item">
            <img src={pic2} alt="" />
            <div className="listItems" __body>
              <h6>{props.title || "[Sample] Dustpan & Brush"}</h6>
              <p>${props.price || "33.95"}</p>
            </div>
          </article>
        </li>
        <li>
          <article className="list-item">
            <img src={pic3} alt="" />
            <div className="listItems" __body>
              <h6>{props.title || "[Sample] Utility Caddy"}</h6>
              <p>${props.price || "45.95"}</p>
            </div>
          </article>
        </li>
        <li>
          <article className="list-item">
            <img src={pic4} alt="" />
            <div className="listItems" __body>
              <h6>{props.title || "[Sample] Canvas Laundry Cart"}</h6>
              <p>${props.price || "200.00"}</p>
            </div>
          </article>
        </li>
        <li>
          <article className="list-item">
            <img src={pic5} alt="" />
            <div className="listItems" __body>
              <h6>{props.title || "[Sample] Laundry Detergent"}</h6>
              <p>${props.price || "29.95"}</p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
}

export default BlogNewProducts;
