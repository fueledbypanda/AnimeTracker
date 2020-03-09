const axios = require("axios");
module.exports = function(server) {
  server.get("/api/search", (req, res, next) => {
    axios({
      method: "GET",
      url: "https://jikan1.p.rapidapi.com/search/anime",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "jikan1.p.rapidapi.com",
        "x-rapidapi-key": "f967c926c9msha3694537c55c4d2p1eab82jsna924bca2b3d9"
      },
      params: {
        q: "Naruto"
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  });
};
