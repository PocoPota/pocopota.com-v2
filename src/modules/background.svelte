<script>
  export let data;
</script>
<img src={data.data.urls.full} alt={data.data.alternative_slugs.ja}>

<style lang="scss">
  img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
</style>