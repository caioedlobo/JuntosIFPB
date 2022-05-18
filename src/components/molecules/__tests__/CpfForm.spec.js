import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import CpfForm from "../CpfForm";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("CpfForm", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<CpfForm />} />
        </Routes>
      </MemoryRouter>
    );
    const cpfForm = screen.getByTestId("cpf-form");

    expect(cpfForm).toBeInTheDocument();
  });
});
