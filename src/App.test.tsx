import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("El usuario verá la página principal de la floristería", () => {
  it("El usuario verá el título de la floristería", () => {
    render(<App />);

    expect(screen.getByText(/Floristería dulces petalos/i)).toBeInTheDocument();
  });
});
