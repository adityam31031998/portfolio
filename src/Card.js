import React from "react";
import { Link } from "react-router-dom";
export default function Card(props) {
  let { url, to, heading, details } = props;

  return (
    <>
      <div className="card2">
        <Link className="link2" to={to}>
          <img className="img1" src={url} alt="loading" />
          <h2 className="info2">{heading}</h2>
          <div className="des">
            <p>{details}</p>
          </div>
          <div className="text1">Click Me</div>
        </Link>
      </div>
    </>
  );
}
