import { get } from "./base.api";
import type { Pokemon } from "../utils/pokemon.model";

const getPokemonById = async (id: number): Promise<Pokemon> => {
  const response = await get(`/pokemon/${id}`);
  return response;
};

const getPokemonByName = async (name: string) => {
  const response = await get(`/pokemon/${name}`);
  return response.data;
};

const getPokemonByRange = async (start: number, end: number) => {
  if (start > end) throw new Error("Start must be less than end");

  const response = await get(`/pokemon/?limit=${end}&offset=${start}`);
  return response.data;
};

export { getPokemonById, getPokemonByName, getPokemonByRange };
