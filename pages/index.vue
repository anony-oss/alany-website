<template>
  <div class="main-block">
    <h4>{{ $t('posts.index[0]') }}</h4>
    <a href="https://github.com/anony-oss/alany">{{ $t('posts.index[1]') }}</a>
    <br>
    <a href="https://github.com/anony-oss/alany-website">{{ $t('posts.index[2]') }}</a>
  </div>
</template>

<script>
export default {
  name: 'IndexPageRu',
  layout: 'default'
}
</script>
<style scoped>
.main-block{
  width: 100%;
  height: 100%;
  padding: 1em;
}
</style>