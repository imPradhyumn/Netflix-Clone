import React from "react";
import logo from "../../../assets/logo-net.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div id="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="row" id="signIn">
        <div className="col-md-6">
          <select id="select-lang">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
        <div className="col-md-6">
          <Link to="/login">
            {" "}
            <button
              type="button"
              id="sign-in-btn"
              className="btn btn-danger"
              style={{
                fontWeight: "500",
                fontFamily: "sans-serif",
              }}
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
