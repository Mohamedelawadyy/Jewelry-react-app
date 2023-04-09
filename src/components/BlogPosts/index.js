import React from "react";
import "./index.css";
function BlogPosts(props) {
  return (
    <div className="posts">
      <article className="blog-item">
        <img src={props.src} alt="blog-item" />
        <a href="/blog">#Bracelets</a>
      </article>
      <div className="blog-body">
        <header className="blog-header">
          <h2 className="blog-title">
            <a href="/blog">What I Bought Jewelry Box In Tucson &amp; Miami</a>
          </h2>
        </header>
        <div className="blog-post">
          Velit laoreet enim sociis risus fames quis accumsan pellentesque
          sociis interdum lectus habitasse lo …
          <div className="blog-dateContainer">
            <div className="blog-date">Mar 07 | Posted by Jane</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPosts;
