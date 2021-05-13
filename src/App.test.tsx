import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("El usuario verá la página principal de la floristería", () => {
  it("se muestra una rosa", () => {
    render(<App />);

    expect(screen.getByText(/Rosa/i)).toBeInTheDocument();
  });
});
