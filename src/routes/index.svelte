<script>
  import { time } from "../time";
  import { onMount } from "svelte";
</script>

<div
  class="mt-20 mb-20 text-white rounded-lg max-w-sm relative px-2 mx-auto
    transition-opacity">
  <article
    class="duration-200 transition-opacity text-white bg-black rounded-lg
      relative h-full block overflow-hidden">
    <img
      src="/img/green.jpg"
      alt="Apply for a show"
      class="rounded-t-lg max-w-full h-20 w-full object-cover" />
    <h1 class="text-center text-white text-3xl mt-4 font-hairline max-w-full">
      Apply for a show!
    </h1>
    <p class="p-2 px-4 text-lg font-thin">
      Show applications for this semester’s FreshAir broadcast schedule are now
      open. So if you have an idea for a weekly hour on anything from classic
      tunes to the latest hits, news to sport, or comedy to drama apply now!
      This year with COVID we’re going to be doing things a little differently
      and having all our hosts broadcast from home. That means you get to record
      when you want, where you want, and however you want. What are you waiting
      for?!
    </p>
    <a
      href="https://forms.freshair.org.uk/apply"
      rel="preload"
      class="block bg-white text-black p-2 m-4 mt-1 text-xl text-center
        rounded-lg">
      Apply now!
    </a>
    <div href="/clues" rel="preload" class="" />
  </article>
</div>
