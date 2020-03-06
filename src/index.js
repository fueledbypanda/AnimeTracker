import React from "react";
import ReactDom from "react-dom";
import Anime from "./components/Anime";

const root = document.querySelector("#root");

const App = () => {
  return (
    <div>
      <Anime />
    </div>
  );
};
ReactDom.render(<App />, root);
