<ul class="skill-cards">
  <li>
    <div>Next.js</div>
    <!-- <div>★★★★★</div> -->
    <div>
      <img src="/skills/nextjs.png" alt="Next.jsのアイコン" />
    </div>
  </li>
  <li>
    <div>React</div>
    <!-- <div>★★★★★</div> -->
    <div>
      <img src="/skills/react.svg" alt="Reactのアイコン" />
    </div>
  </li>
  <li>
    <div>TypeScript</div>
    <!-- <div>★★★★★</div> -->
    <div>
      <img src="/skills/ts.png" alt="TypeScriptのアイコン" />
    </div>
  </li>
  <li>
    <div>CSS</div>
    <!-- <div>★★★★★</div> -->
    <div>
      <img src="/skills/css.png" alt="CSSのアイコン" />
    </div>
  </li>
  <li>
    <div>Sass</div>
    <!-- <div>★★★★☆</div> -->
    <div>
      <img src="/skills/sass.png" alt="Sassのアイコン" />
    </div>
  </li>
</ul>

<!-- <div class="skill-level">
  <div>スキルレベル目安</div>
  <ul>
    <li><span>★☆☆☆☆</span>：Hello World! 程度</li>
    <li><span>★★☆☆☆</span>：部分的に書いたことがある</li>
    <li><span>★★★☆☆</span>：公開済みサービスあり</li>
    <li><span>★★★★☆</span>：複雑めなサービス開発経験あり</li>
    <li><span>★★★★★</span>：複雑めなサービス複数回</li>
  </ul>
</div> -->

<div class="others">
  その他利用経験あり：Astro / Claude Code / Codex / Contentful / CSS / Dify /
  Docker / Docusaurus / docsify / ESLint / Firebase / GAS / Gatsby / Gemini API
  / GitHub / GitHub Pages / HTML / HUGO / はてなブログ / JavaScript / jQuery /
  microCMS / MySQL / Netlify / Next.js / Node.js / OpenAI API / PHP / Prettier /
  Python / React / Sass / Svelte / SvelteKit / supabase / TanStack Router /
  TypeScript / Vercel / Vivliostyle / WordPress / Zod etc...
</div>

<div class="more-read"><a href="/skills">もっと見る</a></div>

<style lang="scss">
  .skill-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin: 0;
    padding: 0;
    li {
      padding: 20px;
      list-style: none;
      width: 110px;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 0px 29px -6px #777777;
      backdrop-filter: blur(10px);
      border-radius: 20px;
      div {
        text-align: center;
        &:nth-child(1) {
          font-size: 18px;
          font-weight: 800;
        }
        &:nth-child(2) {
          font-size: 17px;
          color: #f7b731;
        }
        &:nth-child(2) {
          // &:nth-child(3){
          width: 110px;
          height: 90px;
          display: flex;
          justify-content: center;
          margin-top: 15px;
          img {
            object-fit: contain;
            max-width: 100px;
            max-height: 90px;
          }
        }
      }
    }
  }

  .skill-level {
    margin-top: 45px;
    div {
      text-align: center;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0 auto;
      width: 325px;
      li {
        span {
          color: #f7b731;
        }
      }
    }
  }

  .others {
    margin: 0 auto;
    margin-top: 40px;
    width: 90%;
  }

  .more-read {
    margin-top: 40px;
    text-align: center;
    font-size: 14px;
    a {
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
