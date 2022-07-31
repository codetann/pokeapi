import data from "./data.json";

interface Ablility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Form {
  name: string;
  url: string;
}

interface GameIndice {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

interface Moves {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  };
}

interface Species {
  name: string;
  url: string;
}

interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_femaile: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
    };
    "official-artwork": {
      front_default: string | null;
    };
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export class Pokemon {
  abilities: Ablility[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndice[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;

  constructor(pokemon: any) {
    this.abilities = pokemon.abilities;
    this.base_experience = pokemon.base_experience;
    this.forms = pokemon.forms;
    this.game_indices = pokemon.game_indices;
    this.height = pokemon.height;
    this.held_items = pokemon.held_items;
    this.id = pokemon.id;
    this.is_default = pokemon.is_default;
    this.location_area_encounters = pokemon.location_area_encounters;
    this.moves = pokemon.moves;
    this.name = pokemon.name;
    this.order = pokemon.order;
    this.species = pokemon.species;
    this.sprites = pokemon.sprites;
    this.stats = pokemon.stats;
    this.types = pokemon.types;
    this.weight = pokemon.weight;
  }
}
