<ul class="skill-cards">
  <li>
    <div>HTML</div>
    <div>★★★★★</div>
    <div>
      <img src="/skills/html.svg" alt="HTMLのアイコン">
    </div>
  </li>
  <li>
    <div>CSS</div>
    <div>★★★★★</div>
    <div>
      <img src="/skills/css.png" alt="CSSのアイコン">
    </div>
  </li>
  <li>
    <div>JavaScript</div>
    <div>★★★★★</div>
    <div>
      <img src="/skills/javascript.png" alt="JavaScriptのアイコン">
    </div>
  </li>
  <li>
    <div>PHP</div>
    <div>★★★★★</div>
    <div>
      <img src="/skills/php.svg" alt="PHPのアイコン">
    </div>
  </li>
  <li>
    <div>Sass</div>
    <div>★★★★☆</div>
    <div>
      <img src="/skills/sass.png" alt="Sassのアイコン">
    </div>
  </li>
  <li>
    <div>React</div>
    <div>★★★☆☆</div>
    <div>
      <img src="/skills/react.svg" alt="Reactのアイコン">
    </div>
  </li>
  <li>
    <div>Next.js</div>
    <div>★★★☆☆</div>
    <div>
      <img src="/skills/nextjs.png" alt="Next.jsのアイコン">
    </div>
  </li>
  <li>
    <div>Svelte (Kit)</div>
    <div>★★★☆☆</div>
    <div>
      <img src="/skills/svelte.png" alt="Svelteのアイコン">
    </div>
  </li>
  <li>
    <div>MySQL</div>
    <div>★★★☆☆</div>
    <div>
      <img src="/skills/mysql.png" alt="MySQLのアイコン">
    </div>
  </li>
  <li>
    <div>GitHub</div>
    <div>★★★☆☆</div>
    <div>
      <img src="/skills/github.svg" alt="GitHubのアイコン">
    </div>
  </li>
  <li>
    <div>Python</div>
    <div>★★☆☆☆</div>
    <div>
      <img src="/skills/python.svg" alt="Pythonのアイコン">
    </div>
  </li>
  <li>
    <div>GAS</div>
    <div>★★★★☆</div>
    <div>
      <img src="/skills/gas.png" alt="GASのアイコン">
    </div>
  </li>
</ul>

<div class="skill-level">
  <div>スキルレベル目安</div>
  <ul>
    <li><span>★☆☆☆☆</span>：Hello World! 程度</li>
    <li><span>★★☆☆☆</span>：部分的に書いたことがある</li>
    <li><span>★★★☆☆</span>：公開済みサービスあり</li>
    <li><span>★★★★☆</span>：複雑めなサービス開発経験あり</li>
    <li><span>★★★★★</span>：複雑めなサービス複数回</li>
  </ul>
</div>

<div class="others">その他利用経験あり：Contentful / Docker /  Docusaurus /  GitHub Pages / Gatsby / HUGO / Netlify / Node.js / Postman / Vercel / Vivliostyle / WordPress / docsify / jQuery / microCMS / はてなブログ etc...</div>

<style lang="scss">
  .skill-cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin: 0;
    padding: 0;
    li{
      padding: 20px;
      list-style: none;
      width: 130px;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 0px 29px -6px #777777;
      backdrop-filter: blur(10px);
      border-radius: 20px;
      div{
        text-align: center;
        &:nth-child(1){
          font-size: 18px;
          font-weight: 800;
        }
        &:nth-child(2){
          font-size: 17px;
          color: #f7b731;
        }
        &:nth-child(3){
          width: 130px;
          height: 100px;
          display: flex;
          justify-content: center;
          margin-top: 15px;
          img{
            object-fit: contain;
            max-width: 110px;
            max-height: 100px;
          }
        }
      }
    }
  }

  .skill-level{
    margin-top: 30px;
    div{
      text-align: center;
    }
    ul{
      list-style: none;
      padding: 0;
      margin: 0 auto;
      width: 325px;
      li{
        span{
          color: #f7b731;
        }
      }
    }
  }

  .others{
    margin: 0 auto;
    margin-top: 40px;
    width: 90%;
  }
</style>