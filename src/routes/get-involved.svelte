<script>
  import Heading from "../components/Heading.svelte";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import Social from "../components/Social.svelte";

  let name;
  let email;
  let message;
  let done = false;
  const submit = () => {
    fetch("https://getintouch.freshair.org.uk", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });
    done = true;
  };
</script>

<style>
  .prose h2,
  .prose a {
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
    <p>
      We'd love to have you involved! There are loads of ways to get involved
      with FreshAir, from presenting a show to managing music tech. To apply for
      a show, go to <a
        href="https://forms.freshair.radio/apply">freshair.radio/apply</a>. If
      you're interested or you want to know more, get in touch on <a
        href="https://fb.me/freshairradio">Facebook</a> , <a
        href="https://www.instagram.com/freshairradio/">Instagram</a> , or <a
        href="https://twitter.com/freshairradio">Twitter</a> , or send an email to
      <a href="mailto:manager@freshair.radio">manager@freshair.org.uk</a> . You can
      also use this handy form!
    </p>
    {#if !done}
      <input
        class="w-full sm:w-1/2 mx-auto block bg-transparent text-white
          font-hairline text-xl outline-none p-2 border-white border rounded-lg
          m-2 border-stroke"
        placeholder="Your name..."
        bind:value={name} />
      <input
        type="email"
        class="w-full sm:w-1/2 mx-auto block bg-transparent text-white
          font-hairline text-xl outline-none p-2 border-white border rounded-lg
          m-2 border-stroke"
        placeholder="Your email..."
        bind:value={email} />
      <textarea
        rows="3"
        class="w-full sm:w-1/2 mx-auto block bg-transparent text-white
          font-hairline text-xl outline-none p-2 border-white border rounded-lg
          m-2 border-stroke resize-none"
        placeholder="What do you want to say?"
        bind:value={message} />
      <button
        class="w-full sm:w-1/2 mx-auto block bg-black bg-opacity-50 text-white
          font-hairline text-xl outline-none p-2 border-white border rounded-lg
          m-2 border-stroke resize-none"
        on:click={submit}>
        Submit
      </button>
    {:else}
      <h2 class="text-center">Thank you! We'll get back to you soon!</h2>
    {/if}
  </div>
</div>
