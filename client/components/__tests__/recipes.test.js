import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Recipes from "../Recipes";


test("Test should render Recipes component", () => {
  render(<Recipes />);
  const recipesElement = screen.getByTestId("recipe-form");
  expect(recipesElement).toBeInTheDocument();
});

test("Test if page contain section / labels [Home, Search, Help, Find the food]", () => {
  render(<Recipes />);
  const contactElement = screen.getByTestId("recipe-form");
  expect(contactElement).toHaveTextContent("Home");
  expect(contactElement).toHaveTextContent("Search");
  expect(contactElement).toHaveTextContent("Help");
  expect(contactElement).toHaveTextContent("Find the food");
});
