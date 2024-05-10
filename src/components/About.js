import React from "react";
import Links from "./Links"

function About({bio, gitHub, linkedIn}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio ? bio : null}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links gitHub={gitHub} linkedIn={linkedIn} />
    </div>
  );
}

export default About;