<svelte:options runes />

<script lang="ts">
  import { page } from "$app/state";

  import "../app.css";
  import Header from "../components/header.svelte";

  const appName = "HitColor";

  let title = $state<string>("");
  if (page.url.pathname === "/") {
    title = appName;
  } else {
    title = [appName, page.url.pathname.split("/").slice(1)]
      .filter((path) => path !== "")
      .join(" - ");
  }

  let { children } = $props();
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main class="w-full h-full flex flex-col items-start justify-start">
  <Header />

  {@render children()}
</main>
