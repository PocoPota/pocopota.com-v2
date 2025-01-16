<script>
  import Top from "./top.svelte";
  import Works from "./works.svelte";
  import Articles from "./articles.svelte";
  import CertAw from "./cert-aw.svelte";
  import Background from "$lib/background.svelte";
  export let data;

  // fetchエラーチェック
  let unsplashError = data.img_data.error || false;
  let contentfulError = data.works_data.error || false;
</script>

<Top/>

{#if !contentfulError}
  <section class="works">
    <div class="sec-title">Works</div>
    <Works works_data={data.works_data}/>
  </section>
{/if}

<section class="articles">
  <div class="sec-title">Articles</div>
  <Articles/>
</section>

<section class="certificates-awards">
  <div class="sec-title">Certificates / Awards</div>
  <CertAw/>
</section>

<section class="links">
  <div class="sec-title">Links</div>
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
  <div class="bg-img-details">
    {#if !unsplashError}
      <div>背景画像はランダムに選択されています</div>
      <div><a href="{data.img_data.links.html}" target="_blank" rel="noopener noreferrer">Photo</a> by <a href="{data.img_data.user.links.html}" target="_blank" rel="noopener noreferrer">{data.img_data.user.name}</a> on <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a></div>
    {/if}
  </div>
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