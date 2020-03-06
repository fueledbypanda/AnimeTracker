import { useState, useEffect } from "react";
import axios from "axios";

const axios = require("axios");

const Anime = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() =>
    axios({
      method: "GET",
      url: "https://jikan1.p.rapidapi.com/anime/16498/episodes",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "jikan1.p.rapidapi.com",
        "x-rapidapi-key": "f967c926c9msha3694537c55c4d2p1eab82jsna924bca2b3d9"
      }
    })
      .then(response => setAnimes(response.data), [])
      .catch(error => {
        console.log(error);
      })
  );

  return (
    <div>
      <ul>{animes}</ul>
    </div>
  );
};

export default Anime();
