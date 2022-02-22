import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import PartnerTitle from "../PartnerTitle";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("PartnerTitle", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<PartnerTitle />} />
        </Routes>
      </MemoryRouter>
    );
    const partnerTitle = screen.getByTestId("partner-title");

    expect(partnerTitle).toBeInTheDocument();
  });
});
