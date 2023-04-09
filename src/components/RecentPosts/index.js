import "./index.css";
import pic1 from "../../images/recent-posts/blog01.jpg";
import pic2 from "../../images/recent-posts/blog02.jpg";
import pic3 from "../../images/recent-posts/blog03.jpg";

function RecentPosts() {
  return (
    <section className="recent-posts mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mt-5 mb-5">Recent Posts</h2>
          </div>
          <div className="col-6">
            <article className="blog-item">
              <img src={pic1} alt="blog-item" />
              <a href="/blog">#Bracelets</a>
            </article>
            <div className="blog-body">
              <header className="blog-header">
                <h2 className="blog-title">
                  <a href="/blog">
                    What I Bought Jewelry Box In Tucson &amp; Miami
                  </a>
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
          <div className="col-6">
            <div className="blog d-flex align-items-center justify-content-between">
              <article className="blog-item">
                <img src={pic2} alt="blog-item" />
                <a href="/blog">#Rings</a>
              </article>
              <div className="blog-body">
                <header className="blog-header">
                  <h2 className="blog-title">
                    <a href="/blog">
                      Five Important Things I Learned from Being a Jewelry
                      Appraiser
                    </a>
                  </h2>
                </header>
                <div className="blog-post">
                  Consectetuer ad. Iaculis eros dolor fermentum Curabitur
                  dictumst conubia, ultrices, suscipit. Ipsum …
                </div>
              </div>
            </div>
            <div className="blog d-flex align-items-center justify-content-between">
              <article className="blog-item">
                <img src={pic3} alt="blog-item" />
                <a href="/blog">#Antique</a>
              </article>
              <div className="blog-body">
                <header className="blog-header">
                  <h2 className="blog-title">
                    <a href="/blog">Vintage Motif: Open-Link Bracelets</a>
                  </h2>
                </header>
                <div className="blog-post">
                  Whether its diamonds, jade, sapphires or rubies, the Art Deco
                  Era used a variety of gemstones to cre …
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default RecentPosts;
