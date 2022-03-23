import React from "react";

import Recipes from "./Recipes";

function App() {
  return (
    <div className="container">
      <h1>Kia Ora!</h1>
      <h2>Welcome to the māKai guide 🍕🍜🍲🍣🥗</h2>

      <div>
        <Recipes />
      </div>
      <div className="cat">
        <div className="ear"></div>
        <div className="eye"></div>
        <div className="mouth"></div>
        <div className="nose"></div>
        <div className="tail"></div>
        <div className="body"></div>
        <div className="bubble"></div>
      </div>
    </div>
  );
}

export default App;
