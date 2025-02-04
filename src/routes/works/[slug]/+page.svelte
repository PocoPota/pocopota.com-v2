<script>
  export let data;
  const item = data.item_data;
</script>

<h1>{item.fields.name}</h1>

<section>
  <div class="row-left">
    <div class="thumbnail">
      <img src={item.fields.thumbnail.fields.file.url} alt={item.fields.name}>
    </div>
    <div class="details">
      <div class="date">{item.fields.date}</div>
      <div class="tools">
        <ul>
          {#each item.fields.devs as tool}
            <li>{tool}</li>
          {/each}
        </ul>
      </div>
      <div class="links">
        <div>作品URL：{item.fields.url}</div>
        <div>GitHub：{item.fields.repository}</div>
      </div>
    </div>
  </div>

  <div class="row-right">
    <ul>
      {#each item.fields.comments as comment}
        <li>{comment}</li>
      {/each}
    </ul>
  </div>
</section>

<style lang="scss">
  *{
    color: white;
  }
  img{
    width: 300px;
  }
</style>