<template>
  <div>
    <Header></Header>
    <ProfileForm></ProfileForm>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import Header from '~/components/layouts/header'
import ProfileForm from '~/components/contents/profile-form'
export default {
  components: {
    Header,
    ProfileForm,
  },
}
</script>

<style lang="scss" scoped></style>
