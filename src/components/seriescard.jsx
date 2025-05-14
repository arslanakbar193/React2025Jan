import React from 'react';
import seriesData from "../api/apidata.json"


const SeriesCard = () => {
  return (
    <div>
      {seriesData.map((curElem) => (
        <div key={curElem.id} style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
          <img src={curElem.thumbnail} alt={curElem.title} style={{ width: "200px" }} />
          <h1>{curElem.title}</h1>
          <h2>{curElem.genres.join(", ")}</h2>
          <h3>{curElem.rating}</h3>
          <p>{curElem.description}</p>
          <button>{curElem.available ? "Available" : "Unavailable"}</button>
        </div>
      ))}
    </div>
  );
}

export default SeriesCard;