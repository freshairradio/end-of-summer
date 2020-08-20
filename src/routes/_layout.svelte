<script>
  let menuOpen = false;
  import { stores } from "@sapper/app";
  import { fade } from "svelte/transition";
  const { preloading, page, session } = stores();
  const navigation = [
    { label: "About", url: "/about" },
    { label: "Get Involved", url: "/get-involved" },
    { label: "Music", url: "/teams/music" },
    { label: "Arts", url: "/teams/arts" },
    { label: "News", url: "/teams/news" },
    { label: "Sports", url: "/teams/sports" }
  ];
</script>

<style>
  :global(html) {
    min-height: 100%;
  }
  :global(html),
  .gradient {
    background: linear-gradient(to top right, #16bffd, #cb3066);
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>

<main class="">
  <slot />
  {#if menuOpen}
    <div
      transition:fade
      class="fixed w-screen h-screen bg-opacity-85 bg-black pt-20 top-0 left-0
      z-50"
      on:click={() => (menuOpen = false)}>
      {#each navigation as link}
        <a
          rel="prefetch"
          class="block text-3xl text-white font-thin text-center py-2"
          class:selected={$page.path === link.url}
          href={link.url}>
          {link.label}
        </a>
      {/each}
    </div>
  {/if}
  <div
    class="gradient fixed lg:hidden bottom-0 left-0 w-full h-14 lg:h-20 z-50" />
  <a href="/" rel="preload">
    <div
      class="fixed text-white text-4xl font-hairline bottom-0 lg:bottom-2 left-4
      cursor-pointer w-auto z-50 h-14 lg:h-16">
      fresh
      <b class="-ml-1.5 font-normal">air</b>
    </div>
  </a>
  <div
    class="fixed text-white w-10 h-10 lg:w-16 lg:h-16 rotate-180 transform
    bottom-2 right-4 cursor-pointer z-50"
    on:click={() => (menuOpen = !menuOpen)}>
    <svg viewBox="0 0 20 20" fill="currentColor" className="menu-alt1 w-6 h-6">
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1
        1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0
        01-1-1z"
        clipRule="evenodd" />
    </svg>
  </div>

</main>
