<template>
  <div>
    <Header></Header>
    <Form :currentUID="currentUID"></Form>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import Header from '../components/header'
import Form from '../components/posts-form'
export default {
  components: {
    Header,
    Form,
  },
  data() {
    return {
      currentUID: null,
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('認証中')
        this.currentUID = user.uid
      } else {
        console.log('未認証')
        this.currentUID = null
        this.$router.push('/timeline')
      }
    })
  },
}
</script>

<style lang="scss" scoped></style>
