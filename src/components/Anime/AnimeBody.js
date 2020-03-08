import React from "react";
import CardTemplate from "../CardTemplate";

const styles = {
  main: {
    flexDirection: "row",
    // fontFamily: "fantasy",
    color: "white",
    padding: "2rem",
    backgroundColor: "teal",
    borderRadius: "1rem",
    width: "18rem",
    // justifyContent: "space-between",
    display: "flex",
    margin: "1rem",
    // alignItems: "center",
    flexWrap: "wrap"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // alignItems: "center",
    width: "10rem",
    margin: "1rem"
  }
};
export default function AnimeBody(props) {
  // const renderedAnime = props.map(anime => <CardTemplate anime={anime} />);
  const renderedAnime = props.animes.map(anime => (
    <li key={anime.mal_id}>
      <CardTemplate anime={anime} />
    </li>
  ));
  console.log(props.animes);

  return (
    <div>
      <div className="container" style={styles.container}>
        <div className="child" styles={styles.main}>
          {renderedAnime}
        </div>
      </div>
    </div>
  );
}
