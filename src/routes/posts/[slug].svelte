<script context="module">
  export async function preload({ path, params, query }) {
    return this.fetch(`posts/${params.slug}.json`)
      .then((r) => r.json())
      .then(({ related, ...post }) => {
        return { post, related }
      })
  }
</script>

<script>
  import Loader from '../../components/Loader.svelte'
  import { onMount } from 'svelte'
  export let post
  export let related
  let img
  const handleLoad = (e) => {
    loaded = true
    img.removeEventListener('load', handleLoad)
  }
  onMount(() => {
    img.addEventListener('load', handleLoad)
    img.src = post.feature_image.large
  })
  let loaded = false

  import { stores } from '@sapper/app'
  import Heading from '../../components/Heading.svelte'
  const { preloading, page, session } = stores()
  $: if (!$preloading && img) {
    img.addEventListener('load', handleLoad)
    img.src = post.feature_image.large
  }
</script>

<style>
  .prose :global(iframe) {
    width: 100%;
    min-height: min(400px, 100vw);
  }

  .prose :global(figure img) {
    width: 100%;
    border-radius: 8px;
  }

  .prose-lg :global(*) {
    max-width: 100%;
  }
</style>

<Loader loading={!loaded} />
<div
  class="{loaded ? 'opacity-100' : 'opacity-0'} duration-200 transition-opacity ">
  <img
    bind:this={img}
    style="filter: blur(10px)"
    class="fixed top-0 left-0 object-cover w-screen h-screen"
    src={post.feature_image.small}
    alt={post.title} />
  <div
    class=" top-0 left-0 fixed w-screen h-screen bg-opacity-85 bg-black pt-20 " />

  <div
    class="fixed top-0 left-0 w-full grid items-end bg-black bg-opacity-85 z-20">
    <Heading tags={post.tags} authors={post.authors} title={post.title} />

  </div>

  <div
    class="prose sm:prose-lg px-4 mt-40 mb-40 relative z-10 text-white font-thin
    mx-auto">
    <img
      class="object-cover w-full rounded-lg max-h-80"
      src={post.feature_image.small}
      alt={post.title} />
    {@html post.html}
  </div>

</div>
