<template>
  <header class="head">
    <h1 class="head__logo">Youtube Music Share</h1>

    <nav class="nav" :class="{ 'nav--show': isNavShow }">
      <div class="nav__icon" @click="navHidden">
        <font-awesome-icon icon="times" class="nav__times-icon" />
      </div>
      <ul class="nav__menu">
        <li class="nav__item">
          <nuxt-link
            to="/my-page"
            class="nav__link"
            active-class="nav__link--active"
            >マイページ</nuxt-link
          >
        </li>
        <li class="nav__item">
          <nuxt-link
            to="/timeline"
            class="nav__link"
            active-class="nav__link--active"
            >タイムライン</nuxt-link
          >
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">カテゴリ</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">ランキング</a>
        </li>
        <li class="nav__item nav__item--logout">
          <a href="#" class="nav__link">ログアウト</a>
        </li>
      </ul>
    </nav>
    <button type="button" class="head__logout-button">ログアウト</button>
    <div class="nav__icon" @click="navShow">
      <font-awesome-icon icon="bars" class="fa-2x" style="color: #fff" />
    </div>
    <div
      class="nav__bg"
      :class="{ 'nav__bg--show': isNavShow }"
      @click="navHidden"
    ></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavShow: false,
    }
  },
  methods: {
    navShow() {
      this.isNavShow = true
    },
    navHidden() {
      this.isNavShow = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/_variables.scss';

.head {
  display: flex;
  font-size: 2rem;
  background-color: #000000;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 12%;
  z-index: 3;

  &__logo {
    padding: 0 10px;
    margin: auto 0;
    font-size: 2.6rem;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    text-shadow: 0px 0px 2px #fff, 4px 4px 2px rgba(0, 0, 0, 0.3);
  }

  &__logout-button {
    height: 40px;
    font-size: 1.8rem;
    font-weight: bold;
    margin: auto 10px auto auto;
    color: #fff;
    background-color: rgb(0, 0, 0);
    border: 2px solid #fff;
    border-radius: 4px;

    &:hover {
      background-color: rgb(61, 61, 61);
    }
  }

  // .head
  @include mq-sm {
    height: 11%;

    &__logo {
      font-size: 2.1rem;
    }

    &__logout-button {
      display: none;
    }
  }
}

.nav {
  margin: auto 0;

  &__menu {
    display: flex;
  }

  &__item {
    padding-left: 40px;

    &:first-child {
      padding-left: 60px;
    }

    &--logout {
      display: none;
    }
  }

  &__link {
    color: #fff;
    display: block;
    text-align: center;
    line-height: 42px;

    &:hover {
      border-bottom: 2px solid rgb(0, 123, 255);
    }

    &--active {
      border-bottom: 2px solid rgb(0, 123, 255);
    }
  }

  &__icon {
    display: none;
  }

  // .nav
  @include mq-sm {
    position: absolute;
    top: 0;
    right: -250px;
    width: 50%;
    height: 900px;
    min-height: 100%;
    background-color: #000000;
    z-index: 2;
    transition: 0.6s;

    &--show {
      right: 0;
    }

    &__times-icon {
      display: block;
      color: #fff;
      float: right;
      cursor: pointer;
      font-size: 3rem;
      margin-top: 10px;
      margin-right: 10px;
    }

    &__menu {
      display: flex;
      flex-direction: column;
      padding: 10px;
    }

    &__item {
      text-align: center;
      margin: 20px 0;
      padding: 0;

      &--logout {
        display: block;
        border: 2px solid #fff;
        border-radius: 4px;
      }

      &:first-child {
        margin-top: 50px;
        padding-left: 0;
      }
    }

    &__icon {
      display: block;
      margin: auto 10px auto auto;
    }

    &__bg {
      background-color: #000;
      opacity: 0.6;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      display: none;

      &--show {
        display: block;
      }
    }
  }
}
</style>
