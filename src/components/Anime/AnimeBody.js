import React from "react";
import CardTemplate from "../CardTemplate";

export default function AnimeBody(props) {
  // const renderedAnime = props.map(anime => <CardTemplate anime={anime} />);
  const renderedAnime = props.animes.map(anime => (
    <li>{JSON.stringify(anime)}</li>
  ));
  return <ul>{renderedAnime}</ul>;
}
