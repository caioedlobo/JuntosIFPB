import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import PartnerText from "../PartnerText";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("PartnerText", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<PartnerText />} />
        </Routes>
      </MemoryRouter>
    );
    const partnerText = screen.getByTestId("partner-text");

    expect(partnerText).toBeInTheDocument();
  });
});
