<script>
  export let works_data;
</script>

<ul>
  {#each works_data.items as item}
  <li>
    <a href="/works/{item.fields.id}" rel="noopener noreferrer">
      <img src={item.fields.thumbnail.fields.file.url} alt="サムネイル">
      <div class="content">
        <div>{item.fields.name}</div>
        <div>簡単な作品説明をここに記入</div>
      </div>
    </a>
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
      &:hover{
        filter: brightness(1.3);
      }
      a{
        color: white;
        text-decoration: none;
        img{
          width: 100%;
        }
        .content{
          div{
            &:nth-child(1){
              font-size: 1.1rem;
            }
            &:nth-child(2){
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
</style>