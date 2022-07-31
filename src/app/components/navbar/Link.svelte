<script lang="ts">
  import Icon from "svelte-icons-pack/Icon.svelte";
  import { link } from "svelte-navigator";

  export let label: string;
  export let onClick: () => void;
  export let icon: any;
  export let path: string;
</script>

<a class="link" as="a" use:link href={path} on:click={onClick}>
  <Icon src={icon} color="white" size="1.2rem" />
  <p>{label}</p>
</a>

<style lang="scss">
  .link {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: var(--md-spacing);
    cursor: pointer;
    width: 100%;

    padding: 0 1rem;
    border-radius: 0.5rem;
    color: white;
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: var(--light-red);
      box-shadow: var(--md-shadow);
      transform: translateY(-0.1rem);
    }

    &:active {
      transform: scale(0.99);
    }
  }
</style>
