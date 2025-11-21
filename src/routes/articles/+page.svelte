<svelte:head>
  <title>Articles | PocoPota</title>
  <meta property="og:title" content="Articles | PocoPota" />
  <meta property="og:url" content="https://pocopota.io/articles" />
</svelte:head>

<script>
  export let data;

  // 記事データの取得
  let zennArticles = data.rss_data.zenn.rss.channel.item;
  let hatenaArticles = data.rss_data.hatena.rss.channel.item;
  let blogArticles = data.rss_data.blog.rss.channel.item;
  let qiitaArticles = data.rss_data.qiita?.feed?.entry || [];

  // 配列でない場合は配列に変換
  if (!Array.isArray(zennArticles)) zennArticles = [zennArticles];
  if (!Array.isArray(hatenaArticles)) hatenaArticles = [hatenaArticles];
  if (!Array.isArray(blogArticles)) blogArticles = [blogArticles];
  if (!Array.isArray(qiitaArticles)) qiitaArticles = [qiitaArticles];

  // Atom フィード項目を RSS 形式に正規化
  function normalizeAtomEntry(entry) {
    return {
      title: entry.title,
      link: entry.link?.$.href || entry.link,
      pubDate: entry.published || entry.updated,
      enclosure: null // Atom フィードにはenclosureがない
    };
  }

  // Qiita記事を正規化
  qiitaArticles = qiitaArticles.filter(entry => entry).map(normalizeAtomEntry);

  // 記事を統合
  let articles = [
    ...zennArticles,
    ...hatenaArticles,
    ...blogArticles,
    ...qiitaArticles
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

<h1>Articles</h1>

<ul>
  {#each articles as item}
    <li>
      <a href="{item.link}" target="_blank" rel="noopener noreferrer">
        <div class="thumbnail">
          {#if item.enclosure}
            <img src={item.enclosure['$'].url} alt="サムネイル">
          {:else}
            <img src={`/ogp/${item.title}.png`} alt="サムネイル">
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

<style lang="scss">
  *{
    color: white;
  }
  h1{
    margin-top: 200px;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    font-family: "IBM Plex Mono", serif;
    &::before{
      content: '{ ';
    }
    &::after{
      content: ' }';
    }
  }
  ul{
    width: 950px;
    margin: 150px auto;
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

  // スマホレスポンシブ
  @media screen and (max-width: 500px) {
    h1{
      margin: 30px auto;
    }
    ul{
      width: 90%;
      margin-top: 100px;
      li{
        width: 100%;
        margin: 0 auto;
      }
    }
  }
</style>