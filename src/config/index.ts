import CgPokemon from "svelte-icons-pack/cg/CgPokemon";
import BiSolidBackpack from "svelte-icons-pack/bi/BiSolidBackpack";
import FaSolidFistRaised from "svelte-icons-pack/fa/FaSolidFistRaised";
import CgBolt from "svelte-icons-pack/cg/CgBolt";

const config = {
  links: [
    {
      label: "Pokedex",
      path: "/pokedex",
      icon: CgPokemon,
    },
    {
      label: "Items",
      path: "/items",
      icon: BiSolidBackpack,
    },
    {
      label: "Moves",
      path: "/moves",
      icon: FaSolidFistRaised,
    },
    {
      label: "Abilities",
      path: "/abilities",
      icon: CgBolt,
    },
  ],
};

export default config;
