<script>
  import { fade } from "svelte/transition";
  let password = "supersecret";
  let candidate = "";
  let error = false;
  const check = e => {
    if (e.keyCode === 13) {
      error = candidate !== password;
    }
  };
</script>

<style>
  h1,
  h2 {
    color: white !important;
  }
  main {
    background: #159957;

    background: linear-gradient(to top right, #155799, #159957);
  }
</style>

<main class="grid justify-center px-4 min-h-screen items-center">
  {#if candidate != password}
    <article class="prose text-white self-end mb-10" in:fade>
      <h2 class="text-center">
        Not so fast! You'll need a password for this page...
      </h2>
    </article>

    <input
      bind:value={candidate}
      placeholder="Password..."
      type="password"
      on:keydown={check}
      class="bg-transparent p-4 m-0 border-white border-2 outline-none
      text-white text-xl text-center rounded-full self-start"
      class:border-red-500={error} />
  {:else}
    <article class="prose mt-20 mb-20 text-white" in:fade>
      <h1 class="text-center">Murder Mystery Clues</h1>
      <p>
        Beware of red herrings! The browser histories of the suspects were
        seized as evidence before they could delete them. Unfortunately due to a
        WiFi error, we cannot prove to whom each of the files below belong.
        Peruse the files that were extracted from the suspects’ computers and
        try to work out if these show any new evidence.
      </p>

      <h2>#1</h2>
      <img
        src="/img/microbiology.jpg"
        alt="Microbiology"
        class="rounded-lg md:w-4/5 mx-auto w-full" />
      <h2>#2</h2>
      <img
        src="/img/filetminion.jpg"
        alt="File Minion"
        class="rounded-lg md:w-4/5 mx-auto w-full" />
      <h2>#3</h2>
      <img
        src="/img/wikihow.jpg"
        alt="WikiHow"
        class="rounded-lg md:w-4/5 mx-auto w-full" />
      <h2>#4</h2>
      <img
        src="/img/messages.jpg"
        alt="Messages"
        class="rounded-lg md:w-4/5 mx-auto w-full" />
      <h2>#5</h2>
      <img
        src="./cat.jpg"
        alt="Cat"
        class="rounded-lg md:w-4/5 mx-auto w-full" />
      <h2>#6</h2>
      <img
        src="/img/defamation.jpg"
        alt="Defamation"
        class="rounded-lg md:w-4/5 mx-auto w-full" />
    </article>
  {/if}

</main>
