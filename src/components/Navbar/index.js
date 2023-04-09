import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./nav.css";
import Logo from "../Navbar/NavLogo";
import Linkes from "../NavLinkes";

window.onscroll = () => {
  if (window.scrollY <= 200) {
    document.querySelector("nav").style.backgroundColor = "transparent";
  } else {
    document.querySelector("nav").style.backgroundColor = "#ccc";
  }
};

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <Linkes />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
