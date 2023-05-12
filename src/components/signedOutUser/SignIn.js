import React from "react";
import "./css/sign-in.css";
import logo from "../../assets/logo-net.png";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [wrongCredntialsAlert, setWrongCredntialsAlert] = useState("");

  function formSubmit(e) {
    e.preventDefault();
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
    axios
      .get("http://localhost:5000/login/", {
        params: {
          email: email,
          password: password,
        },
      })
      .then((res) => {
        if (res.data === "False") {
          setWrongCredntialsAlert("Wrong Credentials!!");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  }

  return (
    <div className="sign-in-page">
      <div className="signin-header">
        <div id="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>

      <div
        className="container card mt-5"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", width: "30rem" }}
      >
        <div className="card-body mt-5">
          <h2 className="card-title pb-4">Sign In</h2>
          <form className="sign-in-form" onSubmit={formSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                name="email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <p
              style={{ textAlign: "center", color: "yellow", fontSize: "13px" }}
            >
              {wrongCredntialsAlert}
            </p>
            <button
              type="submit"
              className="mt-4 form-control btn btn-danger btn-lg btn-block"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div className="sign-in-footer"></div>
    </div>
  );
}
