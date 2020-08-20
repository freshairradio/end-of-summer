<script>
  export let tags = []
  export let authors = []
  export let title = ''

  import stars from '../stars.js'
  import byline from '../byline.js'

  $: isPost = !!tags.find((t) => t.slug == 'hash-article')
  $: parsed_byline = byline(authors, tags, { isShow: false, isLive: false })
  $: rating = stars(tags)
</script>

<div>
  {#if rating}
    <div class="flex justify-end p-2">
      {#each rating[0] as _}
        <svg
          id="emoji"
          class="w-8 h-8"
          viewBox="0 0 72 72"
          xmlns="http://www.w3.org/2000/svg">
          <g id="color">
            <polygon
              fill="#fff"
              stroke="none"
              points="35.9928,10.7363 27.7913,27.3699 9.4394,30.0436
              22.7245,42.9838 19.5962,61.2637 36.0084,52.6276 52.427,61.2515
              49.2851,42.9739 62.5606,30.0239 44.2067,27.3638" />
          </g>
          <g id="hair" />
          <g id="skin" />
          <g id="skin-shadow" />
          <g id="line">
            <polygon
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              points="35.9928,10.7363 27.7913,27.3699 9.4394,30.0436
              22.7245,42.9838 19.5962,61.2637 36.0084,52.6276 52.427,61.2515
              49.2851,42.9739 62.5606,30.0239 44.2067,27.3638" />
          </g>
        </svg>
      {/each}
      {#each rating[1] as _}
        <svg
          id="emoji"
          class="w-8 h-8"
          viewBox="0 0 72 72"
          xmlns="http://www.w3.org/2000/svg">
          <g id="color">
            <polygon
              fill="transparent"
              stroke="none"
              points="35.9928,10.7363 27.7913,27.3699 9.4394,30.0436
              22.7245,42.9838 19.5962,61.2637 36.0084,52.6276 52.427,61.2515
              49.2851,42.9739 62.5606,30.0239 44.2067,27.3638" />
          </g>
          <g id="hair" />
          <g id="skin" />
          <g id="skin-shadow" />
          <g id="line">
            <polygon
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              points="35.9928,10.7363 27.7913,27.3699 9.4394,30.0436
              22.7245,42.9838 19.5962,61.2637 36.0084,52.6276 52.427,61.2515
              49.2851,42.9739 62.5606,30.0239 44.2067,27.3638" />
          </g>
        </svg>
      {/each}

    </div>
  {/if}
  <h2 class="text-white font-hairline text-xl md:text-2xl text-right p-4 pt-0">
    <i>{parsed_byline}</i>
    <br />
    <b class="text-2xl md:text-3xl">{title}</b>
  </h2>

</div>
<!-- <h2 class="text-white font-hairline text-3xl p-4">
  {post.title} by
  <b>{post.authors[0].name}</b>
</h2> -->
