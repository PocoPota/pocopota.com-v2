<script>
  import Background from '$lib/background.svelte';
  export let data;

  // 記事データの取得
  let zennArticles = data.rss_data.zenn.rss.channel.item;
  let hatenaArticles = data.rss_data.hatena.rss.channel.item;
  let blogArticles = data.rss_data.blog.rss.channel.item;

  // 記事を統合
  let articles = [
    ...zennArticles,
    ...hatenaArticles,
    ...blogArticles
  ];

  // 全ての記事を時系列に並べる
  articles.sort((a, b) => {
    return new Date(b.pubDate) - new Date(a.pubDate);
  });

  // 時間形式の変換関数
  function formatDate(dateStr) {
    return new Date(dateStr).toISOString().slice(0, 10).replace(/-/g, '/');
  }
</script>

<ul>
  {#each articles as item}
    <li>
      <a href="{item.link}" target="_blank" rel="noopener noreferrer">
        <div class="thumbnail">
          {#if item.enclosure}
            <img src={item.enclosure['$'].url} alt="サムネイル">
          {:else}
            <div>無理だぜ！！！！！！！！！！！！</div>
          {/if}
        </div>
        <div class="content">
          <div>{item.title}</div>
          <div>
            <span>{item.source}</span>
            <span>{formatDate(item.pubDate)}</span>
          </div>
        </div>
      </a>
    </li>
  {/each}
</ul>

<Background img_data={data.img_data}/>

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
      }
      .thumbnail{
        width: 100%;
        height: 157.5px;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .content{
        margin-top: 7px;
        div{
          margin-bottom: 2px;
          font-size: 16px;
          line-height: 1.1em;
        }
        span{
          font-size: 13px;
        }
      }
    }
  }
</style>