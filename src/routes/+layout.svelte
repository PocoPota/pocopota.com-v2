<script>
  const year = new Date().getFullYear();
</script>

<header>
  <div class="header-inner">
    <div class="header-logo">PocoPota.com</div>
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

  // base
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Noto+Sans+JP&family=Roboto&display=swap');
  *{
    font-family: "Roboto", "Noto Sans JP", serif;
  }

  // header
  header{
    width: 100%;
    height: 60px;
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