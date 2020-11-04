<template>
  <div>
    <Header></Header>
    <MyPageForm></MyPageForm>
  </div>
</template>

<script>
import Header from '../components/layouts/header'
import MyPageForm from '../components/contents/my-page-form'
export default {
  components: {
    Header,
    MyPageForm,
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
