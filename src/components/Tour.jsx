import React from "react";

const Tour = ({ id, image, info, name, price }) => {
  return (
    <article className="single-tour">
      <div>
        <img src={image} alt={name} className="img" />
        <div className="tour-info">
          <h5> {name}</h5>
          <p>{info}</p>
        </div>

        <span className="tour-price">${price}</span>
      </div>
    </article>
  );
};

export default Tour;
