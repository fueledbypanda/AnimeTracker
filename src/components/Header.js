import React from "react";
import "/Users/panda/Desktop/Anime-tracker-app/src/components/index.css";

const styles = {
  header: {
    color: "white",
    backgroundColor: "black",
    width: "100%"
  }
};

export default function Header() {
  return (
    <div className="headerthing" style={styles.header}>
      <h2>PandAnime Tracker</h2>;
    </div>
  );
}
