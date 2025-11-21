<script>
  import Background from "$lib/background.svelte";
  export let data;

  let unsplashError = data.img_data.error || false;

  const year = new Date().getFullYear();

  // headerのぼかし度計算
  let displayRatio = 0;
  $: blurRatio = `${displayRatio * 15}px`;

  if(typeof window !== 'undefined'){
      const bgBlur = document.querySelector('#bg-blur');
    window.addEventListener('scroll', () =>{
      let scrollY = window.scrollY;
      const bodyHeight = window.outerHeight;
      if(scrollY / bodyHeight > 1){
        displayRatio = 1;
      }else{
        displayRatio = scrollY / bodyHeight;
      }
    });
  }
</script>

<header style="--blur-ratio: blur({blurRatio});">
  <div class="header-inner">
    <div class="header-logo">
      <a href="/">PocoPota.io</a>
    </div>
  </div>
</header>

<main>
  <slot/>
</main>

<footer>
  <div class="bg-img-details">
    {#if !unsplashError}
      <div>背景画像はビルド時にランダムに選択されています</div>
      <div><a href="{data.img_data.links.html}" target="_blank" rel="noopener noreferrer">Photo</a> by <a href="{data.img_data.user.links.html}" target="_blank" rel="noopener noreferrer">{data.img_data.user.name}</a> on <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a></div>
    {/if}
  </div>
  <ul>
    <li><a href="/sitepolicy">サイトポリシー</a></li>
    <li><a href="/privacypolicy">プライバシーポリシー</a></li>
    <li>©{year} PocoPota</li>
  </ul>
</footer>

<Background img_data={data.img_data}/>

<style lang="scss">
  // reset css
  :global(body){
    margin: 0;
  }

  :global(img) {
    vertical-align: top;
  }

  :global(html){
    scroll-behavior: smooth;
  }

  // base
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Noto+Sans+JP:wght@400;600&family=Roboto:wght@400;600&display=swap');
  *{
    font-family: "Roboto", "Noto Sans JP", serif;
  }

  // header
  header{
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    backdrop-filter: var(--blur-ratio);
    -webkit-backdrop-filter: var(--blur-ratio);
    z-index: 1000;
    .header-inner{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 950px;
      height: 100%;
      margin: 0 auto;
      color: white;
      .header-logo{
        font-family: "IBM Plex Mono", serif;
        font-weight: 600;
        font-size: 20px;
        a{
          color: white;
          text-decoration: none;
        }
      }
    }
  }

  // main
  main{
    width: 950px;
    margin: 0 auto;
    margin-top: 60px;
  }

  // footer
  footer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
    .bg-img-details{
      text-align: center;
      margin-bottom: 20px;
      font-size: 14px;
      color: white;
      a{
        color: white;
        &:hover{
          text-decoration: none;
        }
      }
    }
    ul{
      display: flex;
      gap: 20px;
      padding: 0;
      margin: 0;
      margin-top: 30px;
      li{
        list-style: none;
        color: white;
        font-size: 14px;
        a{
          color: white;
          line-height: 1em;
        }
      }
    }
  }

  // article
  :global(article){
    width: 800px;
    margin: 100px auto;
    color: white;
    padding: 50px;
    position: relative;
    &::after{
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      box-shadow: 0px 0px 29px -6px #777777;
      backdrop-filter: blur(10px);
      border-radius: 20px;
    }
  }
  :global(article h1){
    font-size: 30px;
  }
  :global(article a){
    color: rgb(186, 186, 255);
  }

  // スマホレスポンシブ
  @media screen and (max-width: 500px) {
    header{
      width: 100%;
      position: static;
      .header-inner{
        width: 100%;
      }
    }
    main{
      width: 100%;
    }
    footer{
      ul{
        width: 300px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
    :global(article){
      width: 85%;
      padding: 5%;
    }
  }
</style>