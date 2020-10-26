<template>
  <div class="signin-up">
    <div class="signin-up__inner">
      <i class="fas fa-music fa-7x signin-up__icon"></i>
      <h1 class="signin-up__title">YoutubeMusicShare 会員登録</h1>

      <form class="form">
        <div class="form__item">
          <i class="fas fa-envelope form__icon"></i>
          <input
            class="form__input"
            type="email"
            placeholder="Eメールアドレス"
          />
        </div>
        <div class="form__item">
          <i class="fas fa-lock form__icon"></i>
          <input class="form__input" type="password" placeholder="パスワード" />
        </div>
        <button class="form__btn">ログイン</button>
        <button class="form__btn form__btn--google" @click="googleLogin()">
          <i class="fab fa-google"></i>
          Googleでログインする
        </button>
      </form>

      <div class="signin-up__footer">
        会員登録がまだの方は
        <nuxt-link to="/signup">こちらから会員登録</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/timeline')
      } else {
        console.log('未認証')
      }
    })
  },
  methods: {
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/_variables';
@import '../../assets/sass/_signin-up';
</style>
