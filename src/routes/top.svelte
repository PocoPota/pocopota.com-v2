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

<style lang="scss">
    // top
    .top{
    display: flex;
    justify-content: center;
    margin-top: 250px;
    gap: 50px;
    color: white;
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
</style>