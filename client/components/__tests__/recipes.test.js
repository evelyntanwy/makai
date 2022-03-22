import * as React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Recipes from "../Recipes";

/**
 * @jest-environment jsdom
 */

test("Test should render Recipes component", () => {
  render(<Recipes />);
  const recipesElement = screen.getByTestId("recipe-1");
  expect(recipesElement).toBeInTheDocument();
});
