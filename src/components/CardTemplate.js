import React from "react";

export default function CardTemplate({ anime }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <a href={anime.url}>
        <img src={anime.image_url} className="card-img-top" alt="..." />
      </a>
      <div className="card-body">
        <h5 className="card-title">{anime.title}</h5>
        <p className="card-text">Start date: {anime.start_date}</p>
        <a href="#" className="btn btn-primary">
          Add to Favorites
        </a>
      </div>
    </div>
  );
}
