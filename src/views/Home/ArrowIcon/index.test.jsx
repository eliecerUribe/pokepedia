import { render, screen, fireEvent } from "@testing-library/react";
import ArrowIcon from "./";

describe("ArrowIcon", () => {
  it("renders correctly with required props", () => {
    render(<ArrowIcon direction="left" />);
    const arrowIcon = screen.getByAltText("left arrow");

    expect(arrowIcon).toBeInTheDocument();
    expect(arrowIcon).toHaveClass("arrow left");
  });

  it("calls onClick when clicked", () => {
    const onClick = jest.fn();
    render(<ArrowIcon direction="left" onClick={onClick} />);
    const arrowIcon = screen.getByAltText("left arrow");

    fireEvent.click(arrowIcon);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
