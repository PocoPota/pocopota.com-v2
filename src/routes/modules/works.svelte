<script>
  export let works_data;

  // 時系列に並べる
  works_data.items.sort((a, b) => {
    return new Date(b.fields.date) - new Date(a.fields.date);
  });

  // 記事を9件に絞る
  works_data.items = works_data.items.slice(0, 6);
</script>

<ul>
  {#each works_data.items as item}
  <li>
    <a href="/works/{item.fields.id}" rel="noopener noreferrer">
      <img src={item.fields.thumbnail.fields.file.url} alt="サムネイル">
      <div class="content">
        <div>{item.fields.name}</div>
        <div>{item.fields.short}</div>
      </div>
    </a>
  </li>
  {/each}
</ul>

<div class="more-read"><a href="/works">もっと見る</a></div>

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
  .more-read{
    margin-top: 40px;
    text-align: center;
    font-size: 14px;
    a{
      color: white;
      text-decoration: none;
      &:hover{
        text-decoration: underline;
      }
    }
  }

  // スマホレスポンシブ
  @media screen and (max-width: 500px) {
    ul{
      li{
        width: 90%;
        margin: 0 auto;
      }
    }
  }
</style>