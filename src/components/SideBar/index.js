import React from "react";
import "./index.css";
function SideBar(props) {
  return (
    <div className="sidebar-block">
      <h5>{props.title}</h5>
      <ul className="navList-section">
        <li className="navList-item">
          <a href="#">Shop All</a>
          <ul className="navList-subSection">
            <li className="navList-item">
              <a href="#">Necklets</a>
            </li>
            <li className="navList-item">
              <a href="#">Silver</a>
            </li>
          </ul>
        </li>
        <li className="navList-item">
          <a href="#">Rings</a>
        </li>
        <li className="navList-item">
          <a href="#">Bracelets</a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
