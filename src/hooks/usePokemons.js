import { useState, useEffect } from "react";
import axios from "axios";
import { transformData } from "./utils";

const usePokemons = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [pagination, setPagination] = useState({});

  const fetchPokemons = async (url) => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      const { results, next, previous } = response.data;
      const pokemons = await Promise.all(transformData(results));
      setPokemons(pokemons);
      setPagination({ previous, next });
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons(url);
  }, [url]);

  return {
    isLoading,
    pokemons,
    pagination,
  };
};

export default usePokemons;
