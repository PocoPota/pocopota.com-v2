<script>
  export let data;

  if(typeof window !== 'undefined'){
    const bgBlur = document.querySelector('#bg-blur');
    window.addEventListener('scroll', () =>{
      const scrollY = window.scrollY;
      if(scrollY === 0){
        bgBlur.style.display = 'none';
      } else{
        bgBlur.style.display = 'block';
      }
    });
  }
</script>

<div class="bg-blur" id="bg-blur"></div>
<div class="bg" style="--bg-img-url: url({data.data.urls.full})"></div>

<style lang="scss">
  .bg-blur, .bg{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }

  .bg-blur{
    display: none;
    z-index: -9;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .bg{
    z-index: -10;
    background-image: var(--bg-img-url);
    background-size: cover;
    background-position: center;

    &:before{
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background: #252525;
      opacity: 0.5;
    }
  }
</style>