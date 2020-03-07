import React from "react";
import ReactDom from "react-dom";
import Anime from "./components/Anime";
import Header from "./components/Header";

const root = document.querySelector("#root");

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Anime />
      </div>
    </div>
  );
};
ReactDom.render(<App />, root);
