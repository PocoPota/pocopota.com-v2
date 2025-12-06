<script>
  import { onMount } from 'svelte';

  const newBtn = () => {
    let tmp = document .querySelector(':has(+ .intro-front)');
    let tmp2 = document .querySelector('.intro-front');
    tmp2.classList.remove('intro-front');
    tmp.classList.add('intro-front');
    btnCheck();
  }
  const prevBtn = () => {
    let tmp = document .querySelector('.intro-front + li');
    let tmp2 = document .querySelector('.intro-front');
    tmp2.classList.remove('intro-front');
    tmp.classList.add('intro-front');
    btnCheck();
  }
  const btnCheck = () => {
    // 矢印判定
    let prevOne = document .querySelector('.intro-front + li');
    if(prevOne.innerHTML == ''){
      document .getElementById('prev-btn').style.display = 'none';
    }else{
      document .getElementById('prev-btn').style.display = 'block';
    }
    let newOne = document .querySelector(':has(+ .intro-front)');
    if(newOne.innerHTML == ''){
      document .getElementById('new-btn').style.display = 'none';
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
      <!-- 最初のliにclass:intro-frontを付与 -->
      <li></li>
      <li class="intro-front">大学生になって時間の経ちも早く、1年生も出口が見えてきました。入学後は趣味でも授業でもプログラムを書き、共同開発をする機会も多く、開発を楽しむことができています。特に生成AIと組み合わせた開発が多く、生成AIの自由度を活かしたプロダクトを作る楽しさを実感しています。最近では純粋な技術にも興味はもちろんありますが、UI/UXやアクセシビリティといった分野にも興味が出てきています。改めてセマンティックなHTMLや見やすいUIについて学びたいと思います。<span>2025.12.06</span></li>
      <li>筑波大学に<a href="https://pocopota.hateblo.jp/entry/itf-coins-ac" target="_blank" rel="noopener noreferrer">AC入試で合格して</a>春から進学予定です。このサイトは来年から用なので悪しからず。Webフロントエンドがメインで、Svelteとてもいいのでは....？と最近思いつつ、バックエンドにも手を出しつつあります。<a href="https://zenn.dev/pocopota/articles/27e75ddf707113" target="_blank" rel="noopener noreferrer">CSSでアートで遊びます。</a>開発以外ではダーツにハマりかけそうになっていて、全くの初心者ですが楽しみたいです。進学後はいろんな技術系イベント等に参加したいなーとぼんやり考えてます。<span>2025.02.21</span></li>
      <li>趣味でWeb開発を行っている一般高校生です！WebアプリやブログなどのWeb関係を主に、Discord/LINE botの開発やマイクラサーバー(非公開)も動かしていたりします。開発以外にもパソコンで創作関係は興味があります。<span>2023.02.18</span></li>
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
          transition: opacity 1s ease-in, transform 0.3s ease-in;
          a{
            color: white;
            &:hover{
              text-decoration: none;
            }
          }
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