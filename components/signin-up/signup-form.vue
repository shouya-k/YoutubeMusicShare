<template>
  <div class="signin-up">
    <div class="signin-up__inner">
      <i class="fas fa-music fa-7x signin-up__icon"></i>
      <h1 class="signin-up__title">YoutubeMusicShare 会員登録</h1>

      <form class="form">
        <div class="form__item">
          <i class="fas fa-user form__icon"></i>
          <input class="form__input" type="text" placeholder="ユーザー名" />
        </div>
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
        <div class="form__item">
          <i class="fas fa-redo form__icon"></i>
          <input
            class="form__input"
            type="password"
            placeholder="パスワードの確認"
          />
        </div>
        <button class="form__btn">会員登録</button>
        <button class="form__btn form__btn--twitter">
          <i class="fab fa-twitter"></i>
          Twitterで会員登録する
        </button>
      </form>

      <div class="signin-up__footer">
        既に会員登録済みの方は
        <nuxt-link to="/signin">こちらからログイン</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/_variables';
@import '../../assets/sass/_signin-up';
</style>
