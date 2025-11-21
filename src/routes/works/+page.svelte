<script>
  export let data;
  let works_data = data.works_data;

  works_data.items.sort((a, b) => {
    return new Date(b.fields.date) - new Date(a.fields.date);
  });
</script>

<svelte:head>
  <title>Works | PocoPota</title>
  <meta property="og:title" content="Works | PocoPota" />
  <meta property="og:url" content="https://pocopota.io/works" />
</svelte:head>

<h1>Works</h1>

<ul>
  {#each works_data.items as item}
  <li>
    <a href="/works/{item.fields.id}" rel="noopener noreferrer">
      <img src={item.fields.thumbnail.fields.file.url} alt="サムネイル">
      <div class="content">
        <div>{item.fields.name}</div>
        <div>{item.fields.short}</div>
      </div>
    </a>
  </li>
  {/each}
</ul>

<style lang="scss">
  *{
    color: white;
  }
  h1{
    margin-top: 200px;
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
  ul{
    width: 950px;
    margin: 150px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 25px;
    list-style: none;
    padding: 0;
    li{
      width: 300px;
      &:hover{
        filter: brightness(1.3);
      }
      a{
        color: white;
        text-decoration: none;
        img{
          width: 100%;
        }
        .content{
          div{
            &:nth-child(1){
              font-size: 1.1rem;
            }
            &:nth-child(2){
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }

  // スマホレスポンシブ
  @media screen and (max-width: 500px) {
    h1{
      margin: 30px auto;
    }
    ul{
      width: 90%;
      margin-top: 100px;
      li{
        width: 100%;
        margin: 0 auto;
      }
    }
  }
</style>