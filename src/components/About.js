import React from "react";
import * as asdf from "../data/user"

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={asdf.image} alt="I made this" />
    </div>
  );
}

export default About