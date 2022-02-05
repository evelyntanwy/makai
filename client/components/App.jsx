import React, { useEffect, useState } from "react";

// import { fetchGreetings } from "../api";
import Welcome from "./Welcome";
function App() {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   fetchGreetings().then((greetings) => setMessages(greetings));
  // }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Lets maKai!</h1>
      <ul>
        {messages.map((m) => (
          <li key={m.id}>{m.text} 👋</li>
        ))}
      </ul>
      <form method="POST" action="/mood">
        <label>
          Name:
          <input type="text" name="myName" />
        </label>
        <button>Greet me!</button>
      </form>
      {/* <Welcome /> */}
    </div>
  );
}

export default App;
