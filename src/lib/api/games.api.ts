import { get } from "./base.api";

const getGameByGeneration = async (generation: number) => {
  const response = await get(`/generation/${generation}`);
  return response.data;
};

const getGameByPokedex = async (pokedex: number) => {
  const response = await get(`/pokedex/${pokedex}`);
  return response.data;
};

const getGameByVersion = async (version: string) => {
  const response = await get(`/version/${version}`);
  return response.data;
};
