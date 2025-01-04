<header>
  <div class="header-inner">
    <div class="header-logo">PocoPota.dev</div>
  </div>
</header>

<main>
  <slot/>
</main>

<footer></footer>

<style lang="scss">
  // reset css
  :global(body){
    margin: 0;
  }

  // header
  header{
    width: 100%;
    height: 60px;
    border-bottom: solid 1px black;
    .header-inner{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 950px;
      height: 100%;
      margin: 0 auto;
      color: white;
      font-size: 16px;
    }
  }
</style>