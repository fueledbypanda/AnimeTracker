import React, { useState, useEffect } from "react";
import axios from "axios";

// const [animes, setAnimes] = useState([]);
// const getAnime = async () => {
//   return await axios({
//     method: "GET",
//     url: "https://jikan1.p.rapidapi.com/anime/16498/episodes",
//     headers: {
//       "content-type": "application/octet-stream",
//       "x-rapidapi-host": "jikan1.p.rapidapi.com",
//       "x-rapidapi-key": "f967c926c9msha3694537c55c4d2p1eab82jsna924bca2b3d9"
//     }
//   })
//     .then(response => {
//       setAnimes(response);
//       console.log(getAnime);
//       return getAnime();
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

export default function Anime() {
  // const [animes, setAnime] = useState=([]);

  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jikan1.p.rapidapi.com/anime/16498/episodes",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "jikan1.p.rapidapi.com",
        "x-rapidapi-key": "f967c926c9msha3694537c55c4d2p1eab82jsna924bca2b3d9"
      }
    })
      .then(response => {
        setAnimes(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // const animeRendered = animes.map(anime => <getAnime  />);
  return <div>{JSON.stringify(animes)}</div>;
}
