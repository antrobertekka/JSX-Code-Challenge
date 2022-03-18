//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDom.render(
  <div>
    <h1>My First Code Challenge</h1>
    <ul>
      <li>Robert</li>
      <li>Steve</li>
      <li>Matthew</li>
    </ul>
  </div>,
  document.getElementById("root")
);
