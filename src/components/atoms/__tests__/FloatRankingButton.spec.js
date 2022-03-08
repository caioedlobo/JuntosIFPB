import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import FloatRankingButton from "../FloatRankingButton";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("FloatRankingButton", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<FloatRankingButton />} />
        </Routes>
      </MemoryRouter>
    );
    const floatRankingButton = screen.getByTestId("float-ranking-button");

    expect(floatRankingButton).toBeInTheDocument();
  });
});
