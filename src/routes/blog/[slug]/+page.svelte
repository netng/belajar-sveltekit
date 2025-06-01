<script>
  let { data } = $props();
  let { title, content} = data?.post || {};
</script>

<h1>{title}</h1>
<div>
  {@html content}
</div>