import { render, screen } from "@testing-library/react";

const calculatePower = (area) => Math.round(area * 1000 * 0.18 * 100) / 100;

test("should calculate nominal power from area", () => {
  const result = calculatePower(100);
  expect(result).toBe(18000);
});
