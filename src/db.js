const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/anime_tracker"
);

client.connect();

const sync = async () => {
  const SQL = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  DROP TABLE IF EXISTS favorites;
  DROP TABLE IF EXISTS peepo;
  

  CREATE TABLE peepo(
    id UUID PRIMARY KEY default uuid_generate_v4(),
    title VARCHAR(255) NOT NULL UNIQUE

  );
  CREATE TABLE favorites(
    id UUID PRIMARY KEY default uuid_generate_v4(),
    mal_id UUID,
    "peepoId" UUID --REFERENCES peepo(id)
    
    
    );
  `;
  await client.query(SQL);
};

const getFavorites = async () => {
  const SQL = `SELECT * from favorites`;
  const response = await client.query(SQL);
  return response.rows;
};

const deleteFavorites = async id => {
  const SQL = `DELETE FROM favorites WHERE id = $1`;
  const response = await client.query(SQL, [id]);
  return response;
};

const createFavorites = async (animeId, peepsId) => {
  const SQL = `INSERT INTO favorites(mal_id, "peepoId") VALUES($1, $2) RETURNING *`;
  const response = await client.query(SQL, [animeId, peepsId]);
  console.log(animeId, peepsId);
  return response;
};

module.exports = {
  sync,
  getFavorites,
  deleteFavorites,
  createFavorites
};
