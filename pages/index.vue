<template>
  <div class="login login--bg">
    <div class="login__warpper">
      <h1 class="login__title">Youtube Music Share</h1>
      <p class="login__text">
        このサイトはYoutubeにある音楽動画をシェアするサイトです。Youtubeの共有リンクから動画URLを取得し、このサイトで簡単に共有する事が出来ます。
      </p>
      <p class="login__text">
        あなたのYoutubeにある好きな音楽や偶然出会った素晴らしい音楽を共有してください！
      </p>
      <nuxt-link to="/signup" class="login__btn">
        会員登録はこちらから
        <i class="fas fa-arrow-right"></i>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/sass/_variables';
.login {
  &__warpper {
    width: 70%;
    position: fixed;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;

    @include mq-sm {
      width: 90%;
      top: 45%;
    }
  }

  &--bg {
    background-image: url(../assets/img/mobile-605422_1920.jpg);
    min-height: 100vh;
    background-size: cover;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  &__title {
    font-weight: bold;
    font-size: 7rem;
    padding: 30px 30px 70px;
    text-align: center;
    letter-spacing: 2px;

    @include mq-sm {
      font-size: 2.4rem;
      padding: 30px 0;
    }
  }

  &__text {
    font-size: 3rem;
    padding: 15px 20px;
    letter-spacing: 2px;

    @include mq-sm {
      font-size: 1.6rem;
      padding: 10px 0;
    }
  }

  &__btn {
    width: 40%;
    display: block;
    font-size: 2.8rem;
    margin: 50px auto 0;
    padding: 20px 35px;
    text-align: center;
    color: #fff;
    border: 3px solid #fff;
    border-radius: 100px;

    @include mq-sm {
      width: 90%;
      font-size: 1.4rem;
      padding: 20px 10px;
    }
  }

  &__btn:hover {
    color: rgba(0, 0, 0, 0.5);
    background-color: #fff;
  }
}
</style>
