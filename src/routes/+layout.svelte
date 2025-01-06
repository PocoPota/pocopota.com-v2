<script>
  const year = new Date().getFullYear();

  // headerのぼかし度計算
  let displayRatio = 0;
  $: blurRatio = `${displayRatio * 15}px`;
  $: headerShadow = false;

  if(typeof window !== 'undefined'){
      const bgBlur = document.querySelector('#bg-blur');
    window.addEventListener('scroll', () =>{
      let scrollY = window.scrollY;
      const bodyHeight = window.outerHeight;
      if(scrollY / bodyHeight === 0){
        headerShadow = false;
      }else if(scrollY / bodyHeight > 1){
        displayRatio = 1;
        headerShadow = true;
      }else{
        displayRatio = scrollY / bodyHeight;
        headerShadow = true;
      }
    });
  }
</script>

<header class="{headerShadow ? 'header-scroll' : ''}" style="--blur-ratio: blur({blurRatio});">
  <div class="header-inner">
    <div class="header-logo">
      <a href="/">PocoPota.com</a>
    </div>
  </div>
</header>

<main>
  <slot/>
</main>

<footer>
  <div>©{year} PocoPota</div>
</footer>

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
    &.header-scroll{
      box-shadow: 0 4px 12px 2px rgba(255, 255, 255, 0.144);
    }
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

  // footer
  footer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    div{
      color: white;
      font-size: 14px;
    }
  }
</style>