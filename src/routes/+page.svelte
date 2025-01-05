<script>
  import Works from "../modules/works.svelte";
  import Articles from "../modules/articles.svelte";
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
  <Works/>
</section>

<section class="articles">
  <div class="sec-title">Articles</div>
  <Articles works_data={data.works_data}/>
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
  <div class="banners">
    <div>
      <a href="https://sites.google.com/view/happy-busy/" target="_blank">
        <img src="/no-time.png" alt="時間ねぇー">
      </a>
    </div>
    <div>
      <a href="https://love.tsukuba-ac.net/" target="_blank">
        <img src="/tsukuba-love2.png" alt="時間ねぇー">
      </a>
    </div>
  </div>
  <div class="bg-img-details"><a href="{data.img_data.links.html}" target="_blank">Photo</a> by <a href="{data.img_data.user.links.html}" target="_blank">{data.img_data.user.name}</a> on <a href="https://unsplash.com/" target="_blank">Unsplash</a></div>
</section>

<Background img_data={data.img_data}/>

<style lang="scss">
  *{
    color: white;
  }

  section{
    width: 950px;
    margin: 150px auto;
    .sec-title{
      margin-bottom: 60px;
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
  }

  // top
  .top{
    display: flex;
    justify-content: center;
    margin-top: 130px;
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
          font-size: 20px;
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

  // columns
  .columns{
    margin-bottom: 80px;
    .banners{
      display: flex;
      justify-content: center;
      gap: 20px;
      div{
        a{
          img{
            height: 40px;
          }
        }
      }
    }
    .bg-img-details{
      text-align: center;
      margin-top: 15px;
      font-size: 14px;
    }
  }
</style>