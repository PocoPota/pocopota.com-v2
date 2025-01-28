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
  <div class="links">
    <ul>
      <li class="twitter">
        <a href="https://twitter.com/PocoPota_io" target="_blank" rel="noopener noreferrer">
          <div class="link-icon"><img src="/links/twitter-x.svg" alt="Twitter (X)のアイコン"></div>
          <div class="link-details">
            <div>Twitter (X)</div>
            <div>@PocoPota_io</div>
          </div>
        </a>
      </li>
      <li class="github">
        <a href="https://github.com/PocoPota" target="_blank" rel="noopener noreferrer">
          <div class="link-icon"><img src="/links/github.svg" alt="GitHubのアイコン"></div>
          <div class="link-details">
            <div>GitHub</div>
            <div>PocoPota</div>
          </div>
        </a>
      </li>
      <li class="zenn">
        <a href="https://zenn.dev/pocopota" target="_blank" rel="noopener noreferrer">
          <div class="link-icon"><img src="/links/zenn.svg" alt="Zennのアイコン"></div>
          <div class="link-details">
            <div>Zenn</div>
            <div>@pocopota</div>
          </div>
        </a>
      </li>
      <li class="discord">
        <div class="a">
          <div class="link-icon"><img src="/links/discord.svg" alt="Discordのアイコン"></div>
          <div class="link-details">
            <div>Discord</div>
            <div>pocopota</div>
          </div>
        </div>
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
    .links{
      ul{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
        li{
          border-radius: 4px;
          a, .a{
            display: flex;
            align-items: center;
            padding: 6px 15px;
            gap: 12px;
            color: white;
            text-decoration: none;
            .link-icon{
              display: flex;
              align-items: center;
              width: 25px;
              height: 25px;
              overflow: visible;
              img{
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            .link-details{
              display: flex;
              flex-direction: column;
              div{
                &:nth-child(1){
                  font-size: 11px;
                  color: #cfcfcf;
                }
                &:nth-child(2){
                  font-size: 15px;
                  font-weight: 600;
                }
              }
            }
          }
          a:hover{
            opacity: 0.7;
          }
          &.twitter{
            background: #000000;
            gap: 15px;
            .link-icon{
              width: 22px;
              height: 22px;
            }
          }
          &.github{
            background: #171515;
          }
          &.zenn{
            background: #3ea8ff;
          }
          &.discord{
            background: #5865f2;
          }
        }
      }
    }
  }
</style>