<script>
  let { data } = $props();
</script>

<h1>blogs</h1>
<ul>
  {#each data.summaries as {title, slug, id} (id) }
    <li>
      <a href="/blog/{slug}">
        {title}
      </a>
    </li>
  {/each}
</ul>