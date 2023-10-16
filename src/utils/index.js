import figthing from "../images/fighting.png";
import fire from "../images/fire.png";
import hypchic from "../images/hypchic.png";
import leave from "../images/leave.png";
import lighting from "../images/lightning.png";
import poison from "../images/poison.png";
import rock from "../images/rock.png";
import water from "../images/water.png";
import wind from "../images/wind.png";
import bug from "../images/bug.png";
import ground from "../images/ground.png";
import ghost from "../images/ghost.png";
import steel from "../images/steel.png";
import ice from "../images/ice.png";
import dragon from "../images/dragon.png";
import fairy from "../images/fairy.png";

export const apiUrl = "https://pokeapi.co/api/v2/pokemon";

export const pokemonType = {
  normal: { color: "rgba(170, 166, 127, 1)", img: "" },
  fighting: {
    color: "rgba(193, 34, 57, 1)",
    img: figthing,
  },
  flying: { color: "rgba(168, 145, 236, 1)", img: wind },
  poison: { color: "rgba(164, 62, 158, 1)", img: poison },
  ground: { color: "rgba(222, 193, 107, 1)", img: ground },
  rock: { color: "rgba(182, 158, 49, 1)", img: rock },
  bug: { color: "rgba(167, 183, 35, 1)", img: bug },
  ghost: { color: "rgba(112, 85, 155, 1)", img: ghost },
  steel: { color: "rgba(183, 185, 208, 1)", img: steel },
  fire: { color: "rgba(245, 125, 49, 1)", img: fire },
  water: { color: "rgba(100, 147, 235, 1)", img: water },
  grass: { color: "rgba(116, 203, 72, 1)", img: leave },
  electric: { color: "rgba(249, 207, 48, 1)", img: lighting },
  psychic: { color: "rgba(251, 85, 132, 1)", img: hypchic },
  ice: { color: "rgba(154, 214, 223, 1)", img: ice },
  dragon: { color: "rgba(112, 55, 255, 1)", img: dragon },
  dark: { color: "rgba(117, 87, 76, 1)", img: "" },
  fairy: { color: "rgba(230, 158, 172, 1)", img: fairy },
  unknown: { color: "", img: "" },
  shadow: { color: "rgba(183, 185, 208, 1)", img: "" },
};

export const getColorByOpacity = (str, opacity) =>
  str.replace(
    /(rgba\(\d+,\s*\d+,\s*\d+,\s*)\d+(\.\d+)?(\s*\))/,
    `$1${opacity}$3`
  );
