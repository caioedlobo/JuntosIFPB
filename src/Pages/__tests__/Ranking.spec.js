import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import Ranking from "../Ranking";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Ranking", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<Ranking />} />
        </Routes>
      </MemoryRouter>
    );
    const ranking = screen.getByTestId("ranking");

    expect(ranking).toBeInTheDocument();
  });
});
