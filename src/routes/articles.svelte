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
      <img src={item.enclosure['$'].url} alt="サムネイル">
      <div>
        <div>{item.title}</div>
        <div>
          <span>{item.source}</span>
          <span>{formatDate(item.pubDate)}</span>
        </div>
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