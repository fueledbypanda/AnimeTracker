module.exports = function(server) {
  require("./anime")(server);
  require("./favorite")(server);
  require("./search")(server);
};
