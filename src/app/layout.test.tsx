import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "./layout";
import { describe, it, expect } from "vitest";

describe("RootLayout", () => {
  it("renders children correctly", () => {
    render(
      <RootLayout>
        <div data-testid="test-child">Test Child</div>
      </RootLayout>
    );
    expect(screen.getByTestId("test-child")).toBeInTheDocument();
  });
});
