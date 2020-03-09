const db = require("../db");

module.exports = function(server) {
  server.get("/api/favorites", (req, res, next) => {
    db.getFavorites()
      .then(response => res.status(200).send(response))
      .catch(next);
  });

  server.post("/api/favorites", (req, res, next) => {
    console.log(req.body);
    db.createFavorites(req.body.animeId, req.body.userId)
      .then(response => res.status(200).send(response))
      .catch(next);
  });
};
