<template>
  <div>
    <Header />
    <Content />
    <PostsIcon />
  </div>
</template>

<script>
import Header from '../components/header'
import Content from '../components/content'
import PostsIcon from '../components/posts-icon'
export default {
  components: {
    Header,
    Content,
    PostsIcon,
  },
}
</script>
