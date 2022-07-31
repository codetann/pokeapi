<script lang="ts">
  import { Navbar } from "$components";
  import { default as Pokedex } from "$features/pokedex/pokedex.svelte";
  import { Router, Route } from "svelte-navigator";
</script>

<main>
  <div>
    <Router>
      <Navbar />
      <Route path="/pokedex" component={Pokedex} />
    </Router>
  </div>
</main>

<style>
  :global(:root) {
    /* colors */
    --light-red: #ff0000;
    --light-blue: #00bcd4;
    --pastel-red: #FA9191
    /* shadows */
    --sm-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    --md-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    --lg-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    --xl-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
    /* spacing */
    --md-spacing: 1.5rem;
  }
</style>
