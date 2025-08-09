import { render, screen } from "@testing-library/react";
import Home from "./page";
import { vi } from "vitest";
import React from "react";

// Mock the HomePage component
vi.mock("@/features/HomePage", () => ({
  HomePage: () => <div>Mocked HomePage</div>,
}));

describe("Home component", () => {
  it("should render the HomePage component", async () => {
    render(await Home());
    const homePage = await screen.findByText("Mocked HomePage");
    expect(homePage).toBeInTheDocument();
  });
});