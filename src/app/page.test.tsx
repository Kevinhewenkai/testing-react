import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "./page";

describe("home page", () => {
  it("should render page", () => {
    render(<Home />);
    expect(screen.getByText("page")).toBeInTheDocument();
  });
});
