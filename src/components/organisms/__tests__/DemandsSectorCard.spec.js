import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import DemandsSectorCard from "../DemandsSectorCard";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("DemandsSectorCard", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<DemandsSectorCard />} />
        </Routes>
      </MemoryRouter>
    );
    const demandsSectorCard = screen.getByTestId("demands-sector-card");

    expect(demandsSectorCard).toBeInTheDocument();
  });
});
