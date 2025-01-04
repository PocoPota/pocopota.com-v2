<script>
  import Background from "../modules/background.svelte";
  export let data;
</script>

<section class="top">
  <div class="icon">
    <img src="/pocopota.png" alt="PocoPota">
  </div>
  <div class="about">
    <div class="name">PocoPota<span>&lbrace;@PocoPota&#125;</span></div>
    <div class="title-content belong">
      <div>所属</div>
      <div>
        <ul>
          <li>筑波大学情報学群情報科学類 (25B)</li>
          <li>WORD編集部</li>
        </ul>
      </div>
    </div>
    <div class="title-content">
      <div>技術</div>
      <div>Web周辺 (特にフロントエンド)</div>
    </div>
    <div class="title-content">
      <div>生息地</div>
      <div>つくば / 山口</div>
    </div>
  </div>
  <div class="top-links">
    <ul>
      <li>
        <div>Twitter (X)</div>
        <div>@PocoPota_io</div>
        <div></div>
      </li>
      <li>
        <div>GitHub</div>
        <div>PocoPota</div>
        <div></div>
      </li>
      <li>
        <div>Zenn</div>
        <div>@pocopota</div>
        <div></div>
      </li>
      <li>
        <div>Discord</div>
        <div>pocopota</div>
        <div></div>
      </li>
    </ul>
  </div>
</section>

<section class="works">
  <div class="sec-title">Works</div>
  <ul>
    <li></li>
  </ul>
</section>

<section class="articles">
  <div class="sec-title">Articles</div>
</section>

<section class="skills">
  <div class="sec-title">Skills</div>
</section>

<section class="certificates-awards">
  <div class="sec-title">Certificates / Awards</div>
</section>

<section class="links">
  <div class="sec-title">Links</div>
</section>

<section class="columns">
  じかんねぇー
</section>

<Background {data}/>

<style lang="scss">
  *{
    color: white;
  }

  section{
    width: 950px;
    margin: 0 auto;
  }

  // top
  .top{
    display: flex;
    justify-content: center;
    margin-top: 100px;
    gap: 50px;
    .icon{
      img{
        width: 170px;
        border-radius: 50%;
      }
    }
    .about{
      display: flex;
      flex-direction: column;
      gap: 7px;
      .name{
        display: flex;
        font-size: 28px;
        font-weight: 800;
        margin-bottom: 8px;
        span{
          display: flex;
          align-items: center;
          margin-left: 10px;
          font-size: 18px;
          font-family: "IBM Plex Mono", serif;
        }
      }
      .title-content{
        div{
          &:nth-child(1){
            font-size: 13px;
            color: #cfcfcf;
          }
        }
        &.belong{
          ul{
            list-style: none;
            margin: 0;
            padding: 0;
          }
        }
      }
    }
  }
</style>