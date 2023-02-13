import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/ruchi-priya-196a13137/" target="__blank">
          Ruchi Priya
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.linkedin.com/in/ruchi-priya-196a13137/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>

      </div>
    </div>
  );
};

export default footer;