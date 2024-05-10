import React from "react";

function Home({userData}) {
  return (
    <div id="home">
      <h1 style={{ color: userData.color }}>
        {userData.name} is a Web Developer from {userData.city}
      </h1>
    </div>
  );
}

export default Home;