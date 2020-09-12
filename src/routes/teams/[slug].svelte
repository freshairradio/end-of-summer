<script context="module">
  export function preload({ path, params, query }) {
    return this.fetch(`teams/${params.slug}.json`)
      .then((r) => r.json())
      .then(({ posts, team, image }) => {
        return { posts, team, image };
      });
  }
</script>

<script>
  import Loader from "../../components/Loader.svelte";
  import Heading from "../../components/Heading.svelte";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  export let posts;
  export let team;
  export let image;
  let img;
  const handleLoad = (e) => {
    loaded = true;
    if (img) img.removeEventListener("load", handleLoad);
  };
  onMount(() => {
    if (img && image) {
      img.addEventListener("load", handleLoad);
      img.src = image.small;
    } else {
      loaded = true;
    }
  });
  let loaded = false;

  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  $: if (!$preloading && img && image) {
    img.addEventListener("load", handleLoad);
    img.src = image.small;
  }
</script>

{#if !loaded}
  <Loader loading={!loaded} />
{/if}
<div
  class="{loaded ? 'opacity-100' : 'opacity-0'} duration-200 transition-opacity">
  {#if image}
    <img
      style="filter: blur(10px)"
      class="top-0 left-0 fixed h-screen w-screen object-cover"
      bind:this={img} />
  {/if}
  <div
    class="top-0 left-0 fixed w-screen h-screen bg-opacity-25 bg-black pt-20" />
  <h1
    class="text-white text-4xl bg-black font-hairline fixed top-0 right-0 py-2
      px-4 w-screen text-right bg-opacity-75 z-30">
    from the <b class="capitalize">{team}</b> team
  </h1>
  {#if loaded}
    <div class="flex flex-wrap mt-60 mb-40 max-w-5xl px-4 mx-auto">
      {#each posts as post, i}
        {#if i % 3 === 0}
          <div
            transition:fade
            class="relative w-full border-transparent border-8">
            <a
              href="/posts/{post.slug}"
              class="bg-black bg-opacity-50 rounded-lg relative h-full flex"
              rel="prefetch">
              <img
                style="filter: blur(5px)"
                class="rounded-lg object-cover w-full h-full absolute"
                src={post.feature_image.small}
                alt={post.title} />
              <div
                class="w-full grid items-end bg-black rounded-lg bg-opacity-50
                  relative z-20">
                <Heading
                  tags={post.tags}
                  authors={post.authors}
                  title={post.title} />
              </div>
            </a>
          </div>
        {:else}
          <div
            transition:fade
            class="relative w-full sm:w-1/2 border-transparent border-8">
            <a
              href="/posts/{post.slug}"
              class="bg-black bg-opacity-85 rounded-lg relative h-full flex"
              rel="prefetch">
              <img
                style="filter: blur(5px)"
                class="rounded-lg object-cover w-full h-full absolute"
                src={post.feature_image.small}
                alt={post.title} />
              <div
                class="w-full grid items-end bg-black rounded-lg bg-opacity-85
                  relative z-20">
                <Heading
                  tags={post.tags}
                  authors={post.authors}
                  title={post.title} />
              </div>
            </a>
          </div>
        {/if}
      {/each}
    </div>
  {/if}
</div>
{#each posts as post, i}<a href="/posts/{post.slug}" class="hidden" />{/each}
