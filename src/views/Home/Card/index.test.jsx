import { render, screen } from "@testing-library/react";
import { getFormattedId } from "../../../utils";
import Card from "./";

describe("Card", () => {
  const mockProps = {
    id: 27,
    name: "pikachu",
    avatar: "pikachu.png",
    typeImage: "electric.png",
    backgroundColor: "yellow",
    onClick: jest.fn(),
  };

  it("matches snapshot with required props", () => {
    const { container } = render(<Card {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with formatted id and name", () => {
    render(<Card {...mockProps} />);

    const formattedId = getFormattedId(mockProps.id);
    const formattedName = mockProps.name.toUpperCase();
    const pokemon = {
      id: screen.getByText(formattedId),
      name: screen.getByText(formattedName),
    };

    expect(pokemon.id).toBeInTheDocument();
    expect(pokemon.name).toBeInTheDocument();
  });
});
