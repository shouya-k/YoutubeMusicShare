<template>
  <div>
    <Header></Header>
    <MyPageForm></MyPageForm>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import Header from '~/components/layouts/header'
import MyPageForm from '~/components/contents/my-page-form'
export default {
  components: {
    Header,
    MyPageForm,
  },
}
</script>

<style lang="scss" scoped></style>
