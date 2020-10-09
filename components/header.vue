<template>
  <header class="head">
    <h1 class="head__logo">Youtube Music Share</h1>

    <nav class="nav" :class="{ 'nav--show': isNavShow }">
      <div class="nav__icon" @click="navHidden">
        <font-awesome-icon icon="times" class="nav__times-icon" />
      </div>
      <ul class="nav__menu">
        <li class="nav__item">
          <a href="./my-page.html" class="nav__link">マイページ</a>
        </li>
        <li class="nav__item">
          <a href="index.html" class="nav__link nav__link--active"
            >タイムライン</a
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
