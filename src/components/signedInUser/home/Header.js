import React, { useState } from "react";
import logo from "../../../assets/logo-net.png";
import { Link } from "react-router-dom";
import "../css/header.css";

export default function Header() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  const [isClicked, setIsClicked] = useState(false);
  function showInput() {
    setIsClicked((prev) => !prev);
  }

  return (
    <div className="user-header">
      <nav
        className={
          colorChange === true
            ? "navbar navbar-expand-lg navbar-custom-scrolled"
            : "navbar navbar-expand-lg navbar-custom"
        }
      >
        <div className="container-fluid mx-5">
          <Link to="/">
            <img className="user-header-logo mt-2" src={logo} alt="logo" />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  TV Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  News & Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  My List
                </Link>
              </li>
            </ul>
            <form className="d-flex"></form>
            <li className="mx-3">
              <input
                className={isClicked ? "show-input" : "hide-input"}
                type="search"
                name="search-bar"
                style={{ height: "25px" }}
              />
            </li>
            <li className="nav-item">
              <i
                className="fa fa-search"
                onClick={showInput}
                style={{ fontSize: "20px" }}
              ></i>
            </li>

            <li className="nav-item mx-3">Children</li>
            <li className="nav-item">
              <i className="fa fa-bell" style={{ fontSize: "16px" }}></i>
            </li>
            <li className="nav-item dropdown">
              <label
                to=""
                className="dropdown-toggle mx-3"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </label>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Manage Profiles
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Account
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Help Center
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Sign out of Netflix
                  </Link>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
