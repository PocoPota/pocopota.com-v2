<script>
  export let rss_data;

  // 記事データの取得
  let zennArticles = rss_data.zenn.rss.channel.item;
  let hatenaArticles = rss_data.hatena.rss.channel.item;
  let blogArticles = rss_data.blog.rss.channel.item;

  // 記事を統合
  let articles = [
    ...zennArticles.slice(0, 6),
    ...hatenaArticles.slice(0, 6),
    ...blogArticles.slice(0, 6)
  ];

  // 全ての記事を統合・時系列に並べる
  articles.sort((a, b) => {
    return new Date(b.pubDate) - new Date(a.pubDate);
  });

  // 記事を6件に絞る
  articles = articles.slice(0, 6);

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
            <img src="/ex-thumb.png" alt="サムネイル">
          {/if}
        </div>
        <div class="content">
          <div>{item.title}</div>
          <div>
            <span>{new URL(item.link).hostname}</span>
            <span>{formatDate(item.pubDate)}</span>
          </div>
        </div>
      </a>
    </li>
  {/each}
</ul>

<div class="more-read"><a href="/articles">もっと見る</a></div>

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
        aspect-ratio: 40/21;
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
          &:nth-child(2){
            display: flex;
            justify-content: space-between;
          }
        }
        span{
          font-size: 13px;
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
        &:nth-child(4), &:nth-child(5), &:nth-child(6){
          display: none;
        }
      }
    }
  }
</style>