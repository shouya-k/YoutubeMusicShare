<template>
  <header class="head">
    <h1 class="head__logo">Youtube Music Share</h1>

    <nav class="nav" :class="{ 'nav--show': isNavShow }">
      <div class="nav__icon" @click="navHidden">
        <i class="fas fa-times nav__times-icon"></i>
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
          <nuxt-link
            to="/category"
            class="nav__link"
            active-class="nav__link--active"
            >カテゴリ</nuxt-link
          >
        </li>
        <li class="nav__item">
          <nuxt-link
            to="/ranking"
            class="nav__link"
            active-class="nav__link--active"
            >ランキング</nuxt-link
          >
        </li>
        <li class="nav__item nav__item--logout" @click.prevent="logOut()">
          <a class="nav__link">ログアウト</a>
        </li>
      </ul>
    </nav>
    <button type="button" class="head__logout-btn" @click.prevent="logOut()">
      ログアウト
    </button>
    <div class="nav__icon" @click="navShow">
      <i class="fas fa-bars fa-2x" style="color: #fff"></i>
    </div>
    <div
      class="nav__bg"
      :class="{ 'nav__bg--show': isNavShow }"
      @click="navHidden"
    ></div>
  </header>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  data() {
    return {
      isNavShow: false,
    }
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/signin')
        })
    },
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
  border-bottom: 2px solid rgb(0, 123, 255);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 5px 5px 0px;
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

  &__logout-btn {
    height: 40px;
    font-size: 1.8rem;
    font-weight: bold;
    margin: auto 10px auto auto;
    color: #fff;
    background-color: rgb(0, 0, 0);
    border: 2px solid #fff;
    border-radius: 4px;

    &:hover {
      background-color: #fff;
      color: black;
    }
  }

  // .head
  @include mq-sm {
    height: 11%;

    &__logo {
      font-size: 2.1rem;
    }

    &__logout-btn {
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
