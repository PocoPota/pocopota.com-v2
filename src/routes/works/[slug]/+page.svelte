<script>
  export let data;
  const item = data.item_data;
</script>

<h1>{item.fields.name}</h1>
<img src={item.fields.thumbnail.fields.file.url} alt={item.fields.name}>

<ul>
  {#each item.fields.devs as tool}
    <li>{tool}</li>
  {/each}
</ul>

<div>作品URL：{item.fields.url}</div>
<div>GitHub URL：{item.fields.repository}</div>

<style lang="scss">
  *{
    color: white;
  }
  img{
    width: 300px;
  }
</style>