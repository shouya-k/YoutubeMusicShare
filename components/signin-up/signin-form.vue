<template>
  <div class="signin">
    <div class="signin__inner">
      <i class="fas fa-music fa-7x signin__icon"></i>
      <h1 class="signin__title">YoutubeMusicShare 会員登録</h1>

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

      <div class="signin__footer">
        既に会員登録済みの方は
        <nuxt-link to="/signup">こちらからログイン</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.signin {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 12%;
  background-color: rgb(216, 216, 216);

  &__inner {
    width: 25%;
    margin: 100px auto;
    text-align: center;
  }

  &__icon {
    color: black;
  }

  &__title {
    font-size: 2rem;
    font-weight: bold;
    color: black;
    margin: 10px 0 20px;
  }

  &__footer {
    font-size: 1.4rem;
    margin-top: 20px;
    padding: 15px;
    background-color: #eeeeee;
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(34, 36, 38, 0.22), 0 0 0 0 transparent;
  }
}

.form {
  background: #ffffff;
  padding: 20px 20px 10px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  text-align: center;

  &__item {
    display: flex;
    font-size: 1.4rem;
    padding: 6px 0;
    margin-bottom: 12px;
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: 6px;
  }

  &__icon {
    margin: auto 10px;
  }

  &__input {
    outline: 0;
    width: 100%;
    border: 0;
    padding: 5px;
    box-sizing: border-box;
    font-size: 14px;
  }

  &__btn {
    width: 100%;
    padding: 8px 0;
    margin-bottom: 10px;
    box-sizing: border-box;
    font-size: 1.6rem;
    border: 0;
    border-radius: 6px;
    background-color: black;
    color: #fff;
    opacity: 0.8;

    &--twitter {
      background-color: #69abe8;
    }
  }
  &__btn:hover {
    opacity: 1;
  }
}
</style>
