import { NavLink } from "react-router-dom";

function Linkes() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink
          className="nav-link dropdown-toggle"
          to="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Shop All
        </NavLink>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" to="#">
              Silver
            </a>
          </li>
          <li>
            <a className="dropdown-item" to="#">
              Gold
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/products">
          Rings
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/products">
          Bracelets
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/blog">
          Blog
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/contact">
          Contact Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/cart">
          <span className="nav-item__nav-link__cart">
            <i class="fa fa-cart-plus" aria-hidden="true"></i>
          </span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/register">
          <span className="nav-item__nav-link__user">
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          </span>
        </NavLink>
      </li>
    </ul>
  );
}

export default Linkes;
