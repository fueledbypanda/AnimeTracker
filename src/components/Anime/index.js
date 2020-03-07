import React, { useState, useEffect } from "react";
import axios from "axios";
import AnimeBody from "./AnimeBody";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Anime() {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/anime")
      .then(response => {
        setAnimes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const animeRendered = animes;
  console.log(animeRendered);

  return <AnimeBody animes={animes} />;
}
