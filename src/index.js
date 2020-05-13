import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <h1>My favorite gallary</h1>
    <img className="img_size" alt="food" src={img} />
    <img className="img_size" alt="food" src={img} />
    <img className="img_size" alt="food" src={img} />
  </div>,
  rootElement
);
