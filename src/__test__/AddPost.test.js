import AddPost from "../pages/addPost/AddPost";
import { render, screen } from "@testing-library/react";

test("renders the add post component", () => {
  render(<AddPost />);
});
