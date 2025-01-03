<script>
  export let data;
</script>
<div class="background" style="--bg-img-url: url({data.data.urls.full})"></div>

<style lang="scss">
  .background{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: var(--bg-img-url);
    background-size: cover;
    background-position: center;
  }
</style>