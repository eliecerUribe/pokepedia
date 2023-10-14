export const apiUrl = "https://pokeapi.co/api/v2";

export const pokemonType = {
  normal: "rgba(170, 166, 127, 1)",
  fighting: "rgba(193, 34, 57, 1)",
  flying: "rgba(168, 145, 236, 1)",
  poison: "rgba(164, 62, 158, 1)",
  ground: "rgba(222, 193, 107, 1)",
  rock: "rgba(182, 158, 49, 1)",
  bug: "rgba(167, 183, 35, 1)",
  ghost: "rgba(112, 85, 155, 1)",
  steel: "rgba(183, 185, 208, 1)",
  fire: "rgba(245, 125, 49, 1)",
  water: "rgba(100, 147, 235, 1)",
  grass: "rgba(116, 203, 72, 1)",
  electric: "rgba(249, 207, 48, 1)",
  psychic: "rgba(251, 85, 132, 1)",
  ice: "rgba(154, 214, 223, 1)",
  dragon: "rgba(112, 55, 255, 1)",
  dark: "rgba(117, 87, 76, 1)",
  fairy: "rgba(230, 158, 172, 1)",
  unknown: "",
  shadow: "",
};

export const getColorByOpacity = (str, opacity) =>
  str.replace(
    /(rgba\(\d+,\s*\d+,\s*\d+,\s*)\d+(\.\d+)?(\s*\))/,
    `$1${opacity}$3`
  );
