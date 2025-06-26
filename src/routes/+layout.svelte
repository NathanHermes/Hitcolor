<svelte:options runes />

<script lang="ts">
  import { page } from "$app/state";
  import logo from "$lib/assets/logo.svg";
  import "../app.css";

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
  <header class="w-full h-12 flex">
    <div class="w-full">
      <div class="w-full h-auto flex items-center justify-start">
        <img alt="HitColor logo" src={logo} class="w-auto max-h-12" />
      </div>

      <div>
        <p>Categorias</p>
        <p>Sobre nós</p>
        <p>Contato</p>
      </div>
    </div>

    <div class="w-full">
      <p>T</p>
    </div>
  </header>

  {@render children()}
</main>
