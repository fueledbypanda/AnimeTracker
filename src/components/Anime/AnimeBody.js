import React from "react";
import CardTemplate from "../CardTemplate";

const styles = {
  child: {
    borderRadius: "1rem",
    margin: "1rem"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "1rem"
  }
};
export default function AnimeBody(props) {
  // const renderedAnime = props.map(anime => <CardTemplate anime={anime} />);
  const renderedAnime = props.animes.map(anime => (
    <div style={styles.child} key={anime.mal_id}>
      <CardTemplate anime={anime} />
    </div>
  ));
  console.log(props.animes);

  return (
    <div>
      <div style={styles.container}>{renderedAnime}</div>
    </div>
  );
}
