<script lang="ts">
  // import { getPokemonById } from "$api";
  import { getPokemonById } from "../../../lib/api";
  import { onMount } from "svelte";
  import { Pokemon } from "../../../lib/utils/pokemon.model";

  let artwork: string = "";

  onMount(async () => {
    const pokemon = await getPokemonById(2);
    artwork = pokemon.sprites.other["official-artwork"].front_default;
  });
</script>

<h1>Pokemon</h1>
<img src={artwork} alt="" />

<style>
  /* your styles go here */
</style>
