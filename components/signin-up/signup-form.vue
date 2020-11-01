<template>
  <div class="signin-up">
    <div class="signin-up__inner">
      <i class="fas fa-music fa-7x signin-up__icon"></i>
      <h1 class="signin-up__title">YoutubeMusicShare 会員登録</h1>

      <form class="form">
        <div class="form__item" :class="{ form__input_empty: isName }">
          <i class="fas fa-user form__icon"></i>
          <input
            v-model="name"
            :class="{ form__input_empty: isName }"
            class="form__input"
            type="text"
            placeholder="ユーザー名"
          />
        </div>
        <div class="form__item" :class="{ form__input_empty: isEmail }">
          <i class="fas fa-envelope form__icon"></i>
          <input
            v-model="email"
            :class="{ form__input_empty: isEmail }"
            class="form__input"
            type="email"
            placeholder="Eメールアドレス"
          />
        </div>
        <div class="form__item" :class="{ form__input_empty: isPassword }">
          <i class="fas fa-lock form__icon"></i>
          <input
            v-model="password"
            :class="{ form__input_empty: isPassword }"
            class="form__input"
            type="password"
            placeholder="パスワード"
          />
        </div>
        <div
          class="form__item"
          :class="{ form__input_empty: isPasswordConfirm }"
        >
          <i class="fas fa-redo form__icon"></i>
          <input
            v-model="passwordConfirm"
            :class="{ form__input_empty: isPasswordConfirm }"
            class="form__input"
            type="password"
            placeholder="パスワードの確認"
          />
        </div>
        <button class="form__btn" @click.prevent="createUser()">
          会員登録
        </button>
        <button
          class="form__btn form__btn--google"
          @click.prevent="googleLogin()"
        >
          <i class="fab fa-google"></i>
          Googleで会員登録する
        </button>
      </form>

      <div class="error" :class="{ error__visible: isVisible }">
        <h2 class="error__title">エラー</h2>
        <p class="error__message">{{ errorMessage }}</p>
      </div>

      <div class="signin-up__footer">
        既に会員登録済みの方は
        <nuxt-link to="/signin">こちらからログイン</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      photoURL:
        'https://cdn.pixabay.com/photo/2015/01/20/12/51/mobile-605422_960_720.jpg',
      errorMessage: '',
      isVisible: false,
      isName: false,
      isEmail: false,
      isPassword: false,
      isPasswordConfirm: false,
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
    createUser() {
      this.name === '' ? (this.isName = true) : (this.isName = false)
      this.email === '' ? (this.isEmail = true) : (this.isEmail = false)
      this.password === ''
        ? (this.isPassword = true)
        : (this.isPassword = false)
      this.passwordConfirm === ''
        ? (this.isPasswordConfirm = true)
        : (this.isPasswordConfirm = false)

      if (
        this.name === '' ||
        this.email === '' ||
        this.password === '' ||
        this.passwordConfirm === ''
      ) {
        this.isVisible = true
        this.errorMessage = '全ての項目を入力してください。'
      } else if (this.password !== this.passwordConfirm) {
        this.isVisible = true
        this.isPasswordConfirm = true
        this.errorMessage = 'パスワードが間違っています。'
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((result) => {
            const db = firebase.firestore()
            const collection = db.collection('users')

            collection.doc(result.user.uid).set(
              {
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                email: this.email,
                displayName: this.name,
                photoURL: this.photoURL,
              },
              { merge: true }
            )
          })
      }
    },
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
