<script>
  export let works_data;
  console.log(works_data);
</script>

<ul>
  {#each works_data.items as item}
  <li>
    <img src="/ex-thumb.png" alt="サムネイル">
    <div>
      <div>{item.fields.name}</div>
      <div>簡単な作品説明をここに記入</div>
    </div>
  </li>
  {/each}
</ul>

<style lang="scss">
  ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 25px;
    list-style: none;
    padding: 0;
    li{
      width: 300px;
      img{
        width: 100%;
      }
    }
  }
</style>