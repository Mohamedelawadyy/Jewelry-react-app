import "./index.css";

function Subscribe() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="Subscribe">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <article className="newsletterForm d-flex align-items-center justify-content-start">
              <div className="newsletterForm-content">
                <h5 className="footer-info-heading">
                  Subscribe to our newsletter
                </h5>
                <p>Get the latest updates on new products and upcoming sales</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="subscribe-input">
                  <input placeholder="Your E-mail Address" />
                  <button>SUBSCRIBE</button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
