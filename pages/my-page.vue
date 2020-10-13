<template>
  <div>
    <Header></Header>
    <h1 class="title">マイページです。</h1>
    <PostsIcon></PostsIcon>
  </div>
</template>

<script>
import Header from '../components/header'
import PostsIcon from '../components/posts-icon'
export default {
  components: {
    Header,
    PostsIcon,
  },
}
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  position: absolute;
  top: 20%;
  font-size: 5rem;
  text-align: center;
}
</style>
