import { render, screen } from "@testing-library/react";

import Post from "../components/Post";
test("rendering the componet", () => {
  render(<Post />);
  expect(true).toBe(true);
});
