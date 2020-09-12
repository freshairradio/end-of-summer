<script>
  import Heading from "../components/Heading.svelte";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
</script>

<style>
  .prose h2 {
    color: white;
  }
</style>

<div class="duration-200 transition-opacity">
  <div
    class="top-0 left-0 fixed w-screen h-screen bg-opacity-25 bg-black pt-20" />
  <h1
    class="text-white text-4xl bg-black font-hairline fixed top-0 right-0 py-2
      px-4 w-screen text-right bg-opacity-75 z-30">
    About fresh <b class="-ml-1.5 font-normal">air</b>
  </h1>
  <div
    class="prose sm:prose-lg px-4 mt-40 mb-40 relative z-10 text-white font-thin
      mx-auto">
    <h2>Hi! 👋</h2>
    <p>We're FreshAir, Edinburgh's student radio station</p>

    <p>
      <strong style="color:white">FreshAir is for everyone</strong> &mdash active
      since 1991, we’re one of the University’s biggest societies and one of the
      city’s most diverse radio stations, broadcasting everything from entertainment
      and chat shows to debates, new music, local news and arts coverage.
    </p>
  </div>
</div>
