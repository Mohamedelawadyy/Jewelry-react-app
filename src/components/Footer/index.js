import "./index.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-6">
            <h5 className="footer-info-heading">Customer Services</h5>
            <ul className="footer-info-list">
              <li>
                <a href="#"> FAQs</a>
              </li>
              <li>
                <a href="#">Size Guide</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Sell With Us</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <h5 className="footer-info-heading">Delivery & Returns</h5>
            <ul className="footer-info-list">
              <li>
                <a href="#"> Delivery</a>
              </li>
              <li>
                <a href="#">Order Tracking</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">E-Receipts</a>
              </li>
              <li>
                <a href="#">Buying Guides</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <h5 className="footer-info-heading">Cards & Discounts</h5>
            <ul className="footer-info-list">
              <li>
                <a href="#"> Gift Cards</a>
              </li>
              <li>
                <a href="#">Store Cards</a>
              </li>
              <li>
                <a href="#">Buy Gift Cards</a>
              </li>
              <li>
                <a href="#">Sale Cards</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <h5 className="footer-info-heading">Contact Info</h5>
            <ul className="footer-info-list">
              <li>
                <a href="#">
                  Acme Widgets 123 Widget Street Acmeville, AC 12345 United
                  States of America
                </a>
              </li>
              <li>
                <a href="tel:111-111-1111">Call us at 111-111-1111</a>
              </li>
              <li>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
