<script>
  import Top from "./modules/about.svelte";
  import Skills from "./modules/skills.svelte";
  import Works from "./modules/works.svelte";
  import Articles from "./modules/articles.svelte";
  import CertAw from "./modules/cert-aw.svelte";
  import Links from "./modules/links.svelte";
  export let data;

  // fetchエラーチェック
  let contentfulError = data.works_data.error || false;
  let rssError = data.rss_data.error || false;
</script>

<Top/>

<section class="links">
  <div class="sec-title">Skills</div>
  <Skills/>
</section>

{#if !contentfulError}
  <section class="works">
    <div class="sec-title">Works</div>
    <Works works_data={data.works_data}/>
  </section>
{/if}

{#if !rssError}
  <section class="articles">
    <div class="sec-title">Articles</div>
    <Articles rss_data={data.rss_data}/>
  </section>
{/if}

<section class="certificates-awards">
  <div class="sec-title">Certificates / Awards</div>
  <CertAw/>
</section>

<section class="links">
  <div class="sec-title">Links</div>
  <Links/>
</section>

<section class="columns">
  <div class="banners">
    <div>
      <a href="https://sites.google.com/view/happy-busy/" target="_blank" rel="noopener noreferrer">
        <img src="/no-time.png" alt="時間ねぇー">
      </a>
    </div>
    <div>
      <a href="https://love.tsukuba-ac.net/" target="_blank" rel="noopener noreferrer">
        <img src="/tsukuba-love2.png" alt="つくばに住んでいます。つくばのほうが、楽しいので。">
      </a>
    </div>
  </div>
</section>

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
  }

  // スマホレスポンシブ
  @media screen and (max-width: 500px) {
    section{
      width: 90%;
    }
    .columns{
      .banners{
        flex-wrap: wrap;
      }
    }
  }
</style>