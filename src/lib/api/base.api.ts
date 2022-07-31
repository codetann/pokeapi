import axios from "axios";
import { default as localCache } from "../cache/local.cache";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const get = async (url: string) => {
  const cache = localCache.get(url);

  if (cache) {
    console.log("fetching from cache");
    return cache;
  }

  console.log("fetching from api");

  const response = await api.get(url);
  localCache.set(url, response.data);

  return response.data;
};

export { get };
