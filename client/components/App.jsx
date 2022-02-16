import React, { useState, useEffect } from "react";

import { getWelcome } from "../api";
// import Cat from "./Cat";
import Recipes from "./Recipes";

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState("");

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement);
        return null;
      })
      .catch((err) => {
        console.error(err.message);
      });
  });

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
        {/* <div className="patch"></div> */}
        <div className="bubble"></div>
      </div>
    </div>
  );
}

export default App;
