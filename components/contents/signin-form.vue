<template>
  <div class="signin-up">
    <div class="signin-up__inner">
      <i class="fas fa-music fa-7x signin-up__icon"></i>
      <h1 class="signin-up__title">YoutubeMusicShare 会員登録</h1>

      <form class="form" @submit.prevent="loginUser()">
        <div class="form__item">
          <i class="fas fa-envelope form__icon"></i>
          <input
            v-model="loginEmail"
            class="form__input"
            type="email"
            placeholder="Eメールアドレス"
          />
        </div>
        <div class="form__item">
          <i class="fas fa-lock form__icon"></i>
          <input
            v-model="loginPassword"
            class="form__input"
            type="password"
            placeholder="パスワード"
          />
        </div>
        <button class="form__btn" @click.prevent="loginUser()">ログイン</button>
        <button
          class="form__btn form__btn--google"
          @click.prevent="googleLogin()"
        >
          <i class="fab fa-google"></i>
          Googleでログインする
        </button>
      </form>

      <div class="error" :class="{ error__visible: isVisible }">
        <h2 class="error__title">エラー</h2>
        <p class="error__message">{{ errorMessage }}</p>
      </div>

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
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
      isVisible: false,
      errorMessage: '',
    }
  },
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
    loginUser() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
        .catch(() => {
          this.isVisible = true
          this.errorMessage = 'ログインに失敗しました。'
        })
    },
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_variables';
@import '~/assets/sass/_signin-up';
</style>
