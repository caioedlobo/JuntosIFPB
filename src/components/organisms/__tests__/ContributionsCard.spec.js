import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import ContributionsCard from "../ContributionsCard";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("ContributionsCard", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<ContributionsCard />} />
        </Routes>
      </MemoryRouter>
    );
    const contributionsCard = screen.getByTestId("contributions-card");

    expect(contributionsCard).toBeInTheDocument();
  });
});
