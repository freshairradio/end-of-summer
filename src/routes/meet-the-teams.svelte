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
    meet the <b class="font-normal">teams</b>
  </h1>
  <div
    class="prose sm:prose-lg px-4 mt-40 mb-40 relative z-10 text-white font-thin
      mx-auto">
    <h2>Tune in now!</h2>
    <p>
      Want to get involved in student radio? Heard of Freshair but want to know
      more? This is the event for you! Come hear from our Arts, Music, Sports,
      News, and Production teams and find out how you can get involved!
    </p>

    <a
      href="https://youtu.be/rAEbFOEalkU"
      rel="preload"
      style="color:white;text-decoration:none"
      class="block bg-black text-white p-2 m-4 mt-1 text-xl text-center
        rounded-lg">
      Watch on YouTube Live
    </a>
  </div>
</div>
