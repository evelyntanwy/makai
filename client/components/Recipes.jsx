import React, { useState } from "react";
import {
  Form,
  Container,
  Nav,
  Navbar,
  Carousel,
  Card,
  Row,
  Col,
} from "react-bootstrap";

import { getRecipes } from "../api";

function Recipes() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");

  // recipe.hits[0].recipe.label - Food title
  // recipe.hits[0].recipe.url - Link to page
  // recipe.hits[0].recipe.image - image

  const handleClick = () => {
    console.log("clicked");
    getRecipes(search)
      .then((resultsApi) => {
        setRecipe(resultsApi.hits);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setSearch("");
  };

  const handleChange = (evt) => {
    console.log(evt.target.value);
    setSearch(evt.target.value);
    evt.preventDefault();
  };

  return (
    <div data-testid="recipe-form">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">māKai</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#search">Search</Nav.Link>
            <Nav.Link href="#tags">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            src="images/welcome.jpeg"
            alt="First slide"
            width={1000}
            height={400}
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="images/fork-plate.jpeg"
            alt="Second slide"
            width={1000}
            height={400}
          />

          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="images/burger.jpeg"
            alt="Third slide"
            width={1000}
            height={400}
          />

          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Form.Group controlId="foodSelection">
        <Form.Label id="search">Find the food : </Form.Label>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="eg: Chicken"
        />
        <button onClick={handleClick}>Fill ma belly</button>
      </Form.Group>
      <br />
      <Row xs={1} md={4} className="g-4">
        {recipe.map((elem) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={elem.recipe.image} />
              <Card.Body>
                <Card.Title>{elem.recipe.label}</Card.Title>
                <a href={elem.recipe.url} target="_blank">
                  <button type="button" class="btn btn-link">
                    Let's go
                  </button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Recipes;
