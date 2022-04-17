import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import MTable from "../MTable";

describe("MTable", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(<MTable rows={[]} />);
    const mTable = screen.getByTestId("m-table");

    expect(mTable).toBeInTheDocument();
  });
});
