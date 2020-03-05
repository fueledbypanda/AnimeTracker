const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/anime_tracker"
);

client.connect();

const sync = async () => {};
const SQL = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  DROP TABLE IF EXISTS user;
  DROP TABLE IF EXISTS favorites;
  DROP TABLE IF EXISTS waifu;
  CREATE TABLE user(
    id UUID PRIMARY KEY default uid_generate_v4()
    name VARCHAR(255) NOT NULL UNIQUE;
  )
  CREATE TABLE favorites(
    id UUID
    "userId" REFERENCE user
    
    )
  CREATE TABLE waifu(
    id uuid
    
    
      )
  
  `;
module.exports = {
  sync
};
