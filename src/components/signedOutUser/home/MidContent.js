import pic1 from "../../../assets/home-pic1.jpg";
import pic2 from "../../../assets/home-pic2.jpg";
import pic3 from "../../../assets/home-pic3.jpg";
import pic4 from "../../../assets/home-pic4.jpg";
import React from "react";
import "../css/mid-content.css";

const faqs = [
  [
    "What is Netflix?",
    "Netflix is a streaming service that offers a" +
      "wide variety of award-winning TV shows, movies, anime," +
      "documentaries and more – on thousands of internet-connected devices.",
  ],
  ["How much does Netflix cost?", "Answer2"],
  ["Where can I watch?", "Answer2"],
  ["How do I cancel?", "Answer2"],
  ["What can I watch on Netflix?", "Answer2"],
  ["Is Netflix good for kids?", "Yes"],
];

let count = 0;

export default function MidContent() {
  return (
    <div className="mid-content">
      <div className="poster">
        <div>
          <h1>Enjoy on your TV.</h1>
          <h3>
            Watch on smart TVs, PlayStation, Xbox,<br></br> Chromecast, Apple
            TV, Blu-ray players and<br></br> more.
          </h3>
        </div>
        <img src={pic1} alt="pic1" />
      </div>
      <div className="poster">
        <img src={pic2} alt="pic1" />
        <div>
          <h1>
            Download your shows<br></br> to watch offline.
          </h1>
          <h3>
            Save your favourites easily and always have<br></br> something to
            watch.
          </h3>
        </div>
      </div>
      <div className="poster">
        <div>
          <h1>Watch everywhere.</h1>
          <h3>
            Stream unlimited movies and TV shows on <br></br>your phone, tablet,
            laptop, and TV.
          </h3>
        </div>
        <img src={pic3} alt="pic1" />
      </div>
      <div className="poster">
        <img src={pic4} alt="pic1" />
        <div>
          <h1>Create profiles for children.</h1>
          <h3>
            Send children on adventures with their<br></br> favourite characters
            in a space made just for<br></br> them—free with your membership.
          </h3>
        </div>
      </div>
      {/*fAQ start */}
      <div className="faq">
        <h1 className="py-5">Frequently Asked Questions</h1>
        <div className="faq-content">
          {/*List all faqs*/}
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {faqs.map((faq) => {
              count++;
              return (
                <div className="accordion-item">
                  <h2 className="accordion-header" id={"flush-heading" + count}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#flush-collapse" + count}
                      aria-expanded="false"
                      aria-controls={"flush-collapse" + count}
                    >
                      {faq[0]}
                    </button>
                  </h2>
                  <div
                    id={"flush-collapse" + count}
                    className="accordion-collapse collapse"
                    aria-labelledby={"flush-heading" + count}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">{faq[1]}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="user-register-mid-part">
            <h5>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h5>
            <div className="input-group mb-2 input-group-lg  my-3">
              <input
                type="email"
                className="form-control"
                id="user-email"
                placeholder="Email address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                id="get-started-btn"
                className="btn btn-danger"
                type="button"
              >
                Get Started{" >"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
