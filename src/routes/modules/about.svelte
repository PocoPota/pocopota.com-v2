<script>
  import { onMount } from 'svelte';

  const newBtn = () => {
    let tmp = document .querySelector(':has(+ .intro-front)');
    let tmp2 = document .querySelector('.intro-front');
    tmp2.classList.remove('intro-front');
    tmp.classList.add('intro-front');
    // 矢印判定
    let newOne = document .querySelector(':has(+ .intro-front)');
    if(newOne.innerHTML == ''){
      document .getElementById('new-btn').style.display = 'none';
    }else{
      document .getElementById('prev-btn').style.display = 'block';
    }
  }
  const prevBtn = () => {
    let tmp = document .querySelector('.intro-front + li');
    let tmp2 = document .querySelector('.intro-front');
    tmp2.classList.remove('intro-front');
    tmp.classList.add('intro-front');
    // 矢印判定
    let newOne = document .querySelector('.intro-front + li');
    if(newOne.innerHTML == ''){
      document .getElementById('prev-btn').style.display = 'none';
    }else{
      document .getElementById('new-btn').style.display = 'block';
    }
  }
</script>

<section class="about">
  <div class="about-about">
    <div class="icon">
      <img src="/pocopota.png" alt="PocoPota">
    </div>
    <div class="info">
      <div class="name">PocoPota<span>&lbrace;@PocoPota&#125;</span></div>
      <div class="title-content belong">
        <div>所属</div>
        <div>
          <ul>
            <li>筑波大学 情報学群 情報科学類 (25B)</li>
          </ul>
        </div>
      </div>
      <div class="title-content">
        <div>技術</div>
        <div>Webとその周辺 (特にフロントエンド)</div>
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
  </div>
  <div class="introduction">
    <button id="new-btn" on:click={newBtn}>〈</button>
    <ul>
      <li></li>
      <li class="intro-front">-1かなーと探っていますが、何もいい感じの案が思いつきません。誰か案をください。例えば最近の興味だとか開発関係意外の趣味とかが良いとは思うのですが。。。。<span>2025.02.20</span></li>
      <li>0かなーと探っていますが、何もいい感じの案が思いつきません。誰か案をください。例えば最近の興味だとか開発関係意外の趣味とかが良いとは思うのですが。。。。<span>2025.02.20</span></li>
      <li>1かなーと探っていますが、何もいい感じの案が思いつきません。誰か案をください。例えば最近の興味だとか開発関係意外の趣味とかが良いとは思うのですが。。。。<span>2025.02.20</span></li>
      <li>2どうもどうもここには適当な自己紹介的な文章を入れたいと考えています。何かいい案ないかなーと探っていますが、何もいい感じの案が思いつきません。誰か案をください。例えば最近の興味だとか開発関係意外の趣味とかが良いとは思うのですが。。。。<span>2025.02.20</span></li>
      <li>3どうもどうもここには適当な自己紹介的な文章を入れたいと考えています。何かいい案ないかなーと探っていますが、何もいい感じの案が思いつきません。誰か案をください。例えば最近の興味だとか開発関係意外の趣味とかが良いとは思うのですが。。。。<span>2025.02.20</span></li>
      <li></li>
    </ul>
    <button id="prev-btn" on:click={prevBtn}>〉</button>
  </div>
</section>

<style lang="scss">
  // about
  .about{
    .about-about{
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
      .info{
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
    .introduction{
      width: 90%;
      margin: 0 auto;
      margin-top: 120px;
      position: relative;
      button{
        background: none;
        margin: 0;
        padding: 0;
        border: none;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: white;
        font-size: 30px;
        z-index: 2;
        cursor: pointer;
        user-select: none;
      }
      #new-btn{
        left: 20px;
        display: none;
      }
      #prev-btn{
        right: 20px;
      }
      ul{
        padding: 25px 0;
        display: flex;
        justify-content: center;
        overflow: hidden;
        li{
          width: 70%;
          min-width: 70%;
          font-size: 15px;
          list-style: none;
          box-shadow: 0px 0px 29px -6px #777777;
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 20px;
          color: white;
          span{
            display: block;
            margin-top: 10px;
            font-size: 12px;
            color: #cfcfcf;
            text-align: end;
          }
          &:not(.intro-front){
            display: none;
          }
          &:has(+ .intro-front), &.intro-front + li{
            display: block;
            opacity: 0.8;
            transform: scale(0.9);
          }
        }
      }
    }
  }

  // スマホレスポンシブ
  @media screen and (max-width: 500px) {
    .about{
      .about-about{
        flex-wrap: wrap;
        margin-top: 100px;
        .links{
          width: 80%;
        }
      }
    }
  }
</style>