// Use express router
const axios = require("axios");

module.exports = function(server) {
  server.get("/api/anime", (req, res, next) => {
    axios({
      method: "GET",
      url: "https://jikan1.p.rapidapi.com/top/anime/1/upcoming",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "jikan1.p.rapidapi.com",
        "x-rapidapi-key": "f967c926c9msha3694537c55c4d2p1eab82jsna924bca2b3d9"
      }
    })
      .then(response => {
        res.status(200).json(response.data.top);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
};
