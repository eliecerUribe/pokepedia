import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import usePokemons from "./usePokemons";
import { mockPokemon } from "../tests/mockPokemons";

jest.mock("axios");

const transformDataMock = {
  id: 25,
  sprites: {
    other: {
      "official-artwork": {
        front_default: "pikachu.png",
      },
    },
  },
  types: [
    {
      type: { name: "electric" },
    },
  ],
};

describe("usePokemonDetail", () => {
  it("fetches and returns data correctly", async () => {
    axios.get.mockResolvedValueOnce({
      data: { results: [mockPokemon], next: "next-url", prevous: null },
    });

    const transformDataAxiosMock = jest.spyOn(axios, "get");
    transformDataAxiosMock.mockResolvedValueOnce({
      data: transformDataMock,
    });

    const { result } = renderHook(() => usePokemons("url"));

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.pokemons).toEqual([
        {
          name: mockPokemon.name,
          id: mockPokemon.id,
          avatar: mockPokemon.avatar,
          types: mockPokemon.types,
          typeColor: "rgba(249, 207, 48, 1)",
          typeImage: "lightning.png",
          backgroundColor: "rgba(249, 207, 48, 0.85)",
        },
      ]);
    });
    expect(result.current.isLoading).toBe(false);
  });
});
