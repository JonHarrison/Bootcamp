import React from "react";

function JSXVariables() {
  const name = 'Jon';
  const options = [ 'is awesome', 'is amazing', 'is very powerful', "is the best thing we've done so far" ];

  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React { options[Math.floor(Math.random() * options.length)] }</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
