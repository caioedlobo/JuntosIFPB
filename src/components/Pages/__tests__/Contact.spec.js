import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import Contact from "../Contact";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Contact", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<Contact />} />
        </Routes>
      </MemoryRouter>
    );
    const contact = screen.getByTestId("contact");

    expect(contact).toBeInTheDocument();
  });
});
