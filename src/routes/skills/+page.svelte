<svelte:head>
  <title>Skills | PocoPota</title>
  <meta property="og:title" content="Articles | PocoPota" />
  <meta property="og:url" content="https://pocopota.io/articles" />
</svelte:head>

<article>
  <h1>Skills</h1>
  
  <p style="text-align: center;">調整中...</p>
</article>

<style lang="scss">
  * {
    color: white;
  }
  h1 {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    font-family: "IBM Plex Mono", serif;
    &::before {
      content: "{ ";
    }
    &::after {
      content: " }";
    }
  }

  section{
    width: 90%;
    margin: 0 auto;
  }

  // スマホレスポンシブ
  @media screen and (max-width: 500px) {
    h1 {
      margin: 30px auto;
    }
  }
</style>
