import React from "react";

export default function TopContent() {
  return (
    <div>
      <div className="home-content">
        <h1>
          Unlimited movies,TV <br></br>
          shows and more.
        </h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <h5>
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
      </div>
      <div className="user-register">
        <div className="input-group mb-2 input-group-lg">
          <input
            type="email"
            className="form-control"
            id="user-email"
            placeholder="Email address"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button id="get-started-btn" className="btn btn-danger" type="button">
            Get Started{" >"}
          </button>
        </div>
      </div>
    </div>
  );
}
