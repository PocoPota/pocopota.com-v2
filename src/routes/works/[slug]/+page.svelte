<script>
  export let data;
  const item = data.item_data;
</script>

<h1>{item.fields.name}</h1>

<section>
  <div class="row-left">
    <div class="thumbnail">
      <img src={item.fields.thumbnail.fields.file.url} alt={item.fields.name}>
    </div>
    <div class="details">
      <div class="date">公開時期：{item.fields.date}</div>
      <div class="tools">
        <div>使用技術：</div>
        <ul>
          {#each item.fields.devs as tool}
            <li>{tool}</li>
          {/each}
        </ul>
      </div>
      <div class="links">
        <div>作品URL：{item.fields.url}</div>
        <div>GitHub：{item.fields.repository}</div>
      </div>
    </div>
  </div>

  <div class="row-right">
    <ul class="comments">
      {#each item.fields.comments as comment}
        <li>{comment}</li>
      {/each}
    </ul>
  </div>
</section>

<style lang="scss">
  *{
    color: white;
  }

  h1{
    margin-top: 150px;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    &::before{
      font-family: "IBM Plex Mono", serif;
      content: '{ ';
    }
    &::after{
      font-family: "IBM Plex Mono", serif;
      content: ' }';
    }
  }

  section{
    width: 950px;
    margin: 50px auto;
    display: flex;
    gap: 30px;
    .row-left{
      width: 500px;
      .thumbnail{
        img{
          width: 100%;
        }
      }
    }
    .row-right{
      .comments{
        padding: 0;
        margin: 0;
        li{
          list-style: none;
        }
      }
    }
  }
  img{
    width: 300px;
  }
</style>