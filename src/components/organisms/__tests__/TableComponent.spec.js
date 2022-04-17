import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import TableComponent from "../TableComponent";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("TableComponent", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<TableComponent />} />
        </Routes>
      </MemoryRouter>
    );
    const tableComponent = screen.getByTestId("table-component");

    expect(tableComponent).toBeInTheDocument();
  });
});
