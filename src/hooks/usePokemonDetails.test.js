import { renderHook, act } from "@testing-library/react";
import axios from "axios";
import usePokemonDetail from "./usePokemonDetail";
import { getColorByOpacity, pokemonType } from "../utils";
import { mockPokemon } from "../tests/mockPokemons";

jest.mock("axios");

describe("usePokemonDetail", () => {
  it("fetches and returns data correctly", async () => {
    const pokemonId = 25;
    axios.get.mockResolvedValue({ data: mockPokemon });

    const { result } = renderHook(() => usePokemonDetail(pokemonId));

    expect(result.current.isLoading).toBe(true);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {});

    expect(result.current.isLoading).toBe(false);
    expect(result.current.pokemon).toEqual({
      id: pokemonId,
      name: "PIKACHU",
      weight: 60,
      height: 40,
      types: [{ type: { name: "electric" } }],
      backgroundColor: getColorByOpacity(pokemonType.electric.color, 1),
      avatar: "pikachu.png",
      abilities: [{ ability: { name: "static" } }],
      stats: [{ base_stat: 55, stat: { name: "speed" } }],
    });
  });

  it("handles error fetching data", async () => {
    axios.get.mockRejectedValue({});

    const { result } = renderHook(() => usePokemonDetail(25));

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {});

    expect(result.current.isLoading).toBe(false);
    expect(result.current.pokemon).toEqual({});
  });
});
