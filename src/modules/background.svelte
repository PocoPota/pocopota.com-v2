<script>
  export let img_data;

  let displayRatio = 0.05;
  $: blurRatio = `${displayRatio * 12}px`;

  if(typeof window !== 'undefined'){
    const bgBlur = document.querySelector('#bg-blur');
    window.addEventListener('scroll', () =>{
      let scrollY = window.scrollY;
      const bodyHeight = window.outerHeight;
      if(scrollY / bodyHeight < 0.05){
        displayRatio = 0.05;
      }else if(scrollY / bodyHeight > 1){
        displayRatio = 1;
      }else{
        displayRatio = scrollY / bodyHeight;
      }
    });
  }
</script>

<div class="bg-blur" id="bg-blur" style="--blur-ratio: blur({blurRatio});"></div>
<div class="bg" style="--bg-img-url: url({img_data.urls.full})"></div>

<style lang="scss">
  .bg-blur, .bg{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }

  .bg-blur{
    z-index: -9;
    backdrop-filter: var(--blur-ratio);
    -webkit-backdrop-filter: var(--blur-ratio);
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