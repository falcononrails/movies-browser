import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";

/**
 * @jest-environment jsdom
 */

it("Making sure that headings are properly rendered", async () => {
  render(<Home />);
  expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Trending Movies');
  expect(screen.getByRole('heading', {level: 2})).toHaveTextContent('Trending Series');
});
