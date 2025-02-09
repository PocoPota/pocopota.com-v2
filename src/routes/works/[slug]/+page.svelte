<script>
  export let data;
  const item = data.item_data;

  // コメント内のリンクをクリッカブルに
  function linkify(text) {
    return text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
  }
</script>

<h1>{item.fields.name}</h1>

<section>
  <div class="row-left">
    <div class="thumbnail">
      <img src={item.fields.thumbnail.fields.file.url} alt={item.fields.name}>
    </div>
    <div class="details">
      <div class="date">
        <div class="small">公開時期</div>
        <div>{item.fields.date}</div>
      </div>
      <div class="tools">
        <div class="small">使用技術</div>
        <ul>
          {#each item.fields.devs as tool}
            <li>{tool}</li>
          {/each}
        </ul>
      </div>
      <div class="links">
        <div>
          <div class="small">作品URL</div>
          <a href={item.fields.url} target="_blank" rel="noopener noreferrer">{item.fields.url}</a>
        </div>
        <div>
          <div class="small">GitHub</div>
          {#if item.fields.repository == "private"}
            <div>private</div>
          {:else}
            <a href={item.fields.repository} target="_blank" rel="noopener noreferrer">{item.fields.repository}</a>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <div class="row-right">
    <ul class="comments">
      {#each item.fields.comments as comment}
        <li>{@html linkify(comment)}</li>
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
      .details{
        margin-top: 15px;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        .small{
          font-size: 13px;
          color: #cfcfcf;
        }
        .tools{
          ul{
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            padding: 0;
            li{
              list-style: none;
              &+li{
                &::before{
                  content: '/';
                  margin: 0 5px;
                }
              }
            }
          }
        }
        .links{
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
      }
    }
    .row-right{
      .comments{
        padding: 0;
        margin: 0;
        li{
          list-style: none;
          background: #ebebeb;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          color: #252525;
        }
      }
    }
  }
  img{
    width: 300px;
  }
</style>