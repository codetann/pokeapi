<script>
  import { default as config } from "$config";
  import { default as NavLink } from "./Link.svelte";
</script>

<div class="links">
  {#each config.links as link}
    <NavLink
      label={link.label}
      icon={link.icon}
      onClick={() => null}
      path={link.path}
    />
  {/each}
</div>

<style lang="scss">
  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    justify-content: center;
  }
</style>
