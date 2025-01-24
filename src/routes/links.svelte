<ul>
  <li class="twitter">
    <a href="https://twitter.com/PocoPota_io" target="_blank" rel="noopener noreferrer">
      <div class="link-icon"><img src="/links/twitter-x.svg" alt="Twitter (X)のアイコン"></div>
      <div class="link-details">
        <div>Twitter (X) - 技術</div>
        <div>@PocoPota_io</div>
      </div>
    </a>
  </li>
  <li class="twitter">
    <a href="https://x.com/ppmk_u" target="_blank" rel="noopener noreferrer">
      <div class="link-icon"><img src="/links/twitter-x.svg" alt="Twitter (X)のアイコン"></div>
      <div class="link-details">
        <div>Twitter (X) - 大学</div>
        <div>@ppmk_u</div>
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
    <a href="https://discord.com/users/677877265694195713" target="_blank" rel="noopener noreferrer">
      <div class="link-icon"><img src="/links/discord.svg" alt="Discordのアイコン"></div>
      <div class="link-details">
        <div>Discord</div>
        <div>pocopota</div>
      </div>
    </a>
  </li>
  <li class="blog">
    <a href="https://blog.pocopota.com" target="_blank" rel="noopener noreferrer">
      <div class="link-icon"><img src="/links/blog-tech.svg" alt="ブログのアイコン"></div>
      <div class="link-details">
        <div>Blog - 技術</div>
        <div>PocoPotaの隠れ家</div>
      </div>
    </a>
  </li>
  <li class="blog">
    <a href="https://pocopota.hateblo.jp/" target="_blank" rel="noopener noreferrer">
      <div class="link-icon"><img src="/links/blog-random.svg" alt="ブログのアイコン"></div>
      <div class="link-details">
        <div>Blog - 雑記</div>
        <div>PocoPota</div>
      </div>
    </a>
  </li>
  <li class="mail">
    <div class="a">
      <div class="link-icon"><img src="/links/email.svg" alt="メールのアイコン"></div>
      <div class="link-details">
        <div>E-mail</div>
        <div>contact[a]pocopota.com</div>
      <div>
    </div>
  </li>
</ul>

<style lang="scss">
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    li{
      width: 250px;
      border-radius: 4px;
      .a, a{
        display: flex;
        align-items: center;
        padding: 6px 15px;
        gap: 12px;
        color: white;
        text-decoration: none;
        &:hover{
          opacity: 0.7;
        }
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
      .a:hover{
        opacity: 1;
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
      &.blog{
        background: #483d8b;
      }
      &.mail{
        background: #017cf2;
      }
    }
  }
</style>