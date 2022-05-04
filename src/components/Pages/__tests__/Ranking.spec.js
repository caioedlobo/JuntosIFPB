import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import Ranking from "../Ranking";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Axios from "axios";
jest.mock("axios");
const axiosMock = Axios;
describe("Ranking", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    jest.spyOn(axiosMock, "get").mockReturnValue(Promise.resolve([]));
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
