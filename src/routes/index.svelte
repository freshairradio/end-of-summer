<script>
  import { time } from '../time'
  import { onMount } from 'svelte'
  let img
  onMount(() => {
    const handleLoad = (e) => (loaded = true)
    img.addEventListener('load', handleLoad)
    img.src = '/img/friday.jpg'
  })
  let loaded = false
</script>

<div
  class=" mt-20 mb-20 text-white rounded-lg max-w-sm relative px-2 mx-auto
  transition-opacity">
  <article
    class="{loaded ? 'opacity-100' : 'opacity-0'} duration-200
    transition-opacity text-white bg-gray-900 rounded-lg relative h-full">
    <img
      bind:this={img}
      alt="Freshair Fridays"
      class="rounded-t-lg max-w-full" />
    <h1 class="text-center text-white text-3xl mt-4 font-hairline max-w-full ">
      Going live {$time}
    </h1>
    <p class=" pb-4 p-2 px-4 text-lg font-thin">
      We're taking a short break from our regular broadcast schedule to bring
      you Freshair Fridays, jam packed with student radio every Friday from 2pm!
    </p>
    <div
      class="absolute bottom-0 p-2 px-4 w-full left-0 text-right text-4xl
      font-hairline grid grid-flow-col grid-cols-6 items-center" />
  </article>
</div>
