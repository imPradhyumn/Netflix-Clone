import React from "react";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footer mt-2">
      <div className="footer-content">
        <h6 className="align-to-list">Questions? Call 000-800-040-1843</h6>
        <div className="list-items">
          <ul>
            <li>FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="align-to-list">
          <select id="select-lang-footer" className="my-4">
            <option>English</option>
            <option>Hindi</option>
          </select>
          <p>Netflix India</p>
        </div>
      </div>
    </div>
  );
}
