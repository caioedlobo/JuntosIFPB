import { act, cleanup, render, screen } from "@testing-library/react";
import React from "react";
import MTable from "../MTable";
import Axios from "axios";
jest.mock("axios");
const axiosMock = Axios;

describe("MTable", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", async () => {
    jest.spyOn(axiosMock, "get").mockReturnValue(Promise.resolve([]));

    render(<MTable rows={[]} />);
    const mTable = screen.getByTestId("m-table");

    expect(mTable).toBeInTheDocument();
  });
});
