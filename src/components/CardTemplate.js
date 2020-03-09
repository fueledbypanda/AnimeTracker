import React, { useState } from "react";
import axios from "axios";

export default function CardTemplate({ anime }) {
  const [favorites, setFavorites] = useState([]);
  const addToFavorite = async thingToAdd => {
    try {
      const created = (await axios.post("/api/favorites", thingToAdd)).data;
      setFavorites([...favorites, created]);
    } catch (ex) {
      console.log("error");
    }
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <a href={anime.url}>
        <img src={anime.image_url} className="card-img-top" alt="..." />
      </a>
      <div className="card-body">
        <h5 className="card-title">{anime.title}</h5>
        <p className="card-text">Start date: {anime.start_date}</p>
        <form value="" onClick={() => console.log(anime)}>
          <button type="button" className="btn btn-primary">
            Add to Favorite
          </button>
        </form>
      </div>
    </div>
  );
}
