import React, { useEffect, useState } from "react";
// import { Container, Form, Col, Row } from "react-bootstrap";

function Welcome() {
  useEffect(() => {
    fetchGreetings().then((greetings) => setMessages(greetings));
  }, []);

  <form method="POST" action="/mood">
    <label>
      Name:
      <input type="text" name="myName" />
    </label>
    <button>Greet me!</button>
  </form>;
}

export default Welcome;
