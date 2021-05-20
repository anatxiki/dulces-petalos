import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("El usuario verá la página principal de la floristería", () => {
  it("se muestra una rosa", () => {
    render(<App />);

    expect(screen.getByText(/Rosa/i)).toBeInTheDocument();
  });

  it("se muestran varias flores", () => {
    render(<App />);

    expect(screen.getByText(/Rosa/i)).toBeInTheDocument();
    expect(screen.getByText(/Margarita/i)).toBeInTheDocument();
    expect(screen.getByText(/Azucena/i)).toBeInTheDocument();
  });

  it("comprueba que se está haciendo la llamada a back", async () => {
    jest.spyOn(window, "fetch");

    render(<App />);

    await screen.findByText(/Azucena/i);

    expect(window.fetch).toBeCalledWith(
      "https://dulces-petalos.herokuapp.com/api/product"
    );
  });
});
