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
    kahoot <b class="font-normal">quiz</b>
  </h1>
  <div
    class="prose sm:prose-lg px-4 mt-40 mb-40 relative z-10 text-white font-thin
      mx-auto">
    <h2>It's Quiz time!</h2>
    <p>
      It's time to test your knowledge! With questions compiled by our committee
      members, come along to our online quiz.
    </p>
    <a
      href="https://kahoot.it/challenge/02516382?challenge-id=4fbfc50c-c471-45ec-9795-6543bf885092_1600174780244"
      rel="preload"
      style="color:white;text-decoration:none"
      class="block bg-black text-white p-2 m-4 mt-1 text-xl text-center
        rounded-lg">
      Get started
    </a>
  </div>
</div>
