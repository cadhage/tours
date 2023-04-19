import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <div>
        <img src={image} alt={name} className="img" />
        <div className="tour-info">
          <h5> {name}</h5>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}{" "}
            <button className="info-btn" onClick={() => setReadMore(!readMore)}>
              {!readMore ? "show" : "hide"}
            </button>
          </p>

          <button
            type="button"
            className="btn btn-block delete-btn"
            onClick={() => {
              return removeTour(id);
            }}
          >
            Not Interested
          </button>
        </div>
        <span className="tour-price">${price}</span>
      </div>
    </article>
  );
};

export default Tour;
