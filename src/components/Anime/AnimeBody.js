import React from "react";
import CardTemplate from "../CardTemplate";

export default function AnimeBody(props) {
  // const renderedAnime = props.map(anime => <CardTemplate anime={anime} />);
  const renderedAnime = props.animes.map(anime => (
    <li key={anime.mal_id}>
      <CardTemplate anime={anime} />
    </li>
  ));
  console.log(props.animes);

  return <ul>{renderedAnime}</ul>;
}
