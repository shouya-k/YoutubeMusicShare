<template>
  <header class="head">
    <h1 class="head__logo">Youtube Music Share</h1>

    <nav class="nav">
      <ul class="nav__menu">
        <li class="nav__item">
          <nuxt-link to="/signin" class="nav__link">SignIn</nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link to="/signup" class="nav__link">SignUp</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
}

.nav {
  margin: auto 10px auto auto;

  &__menu {
    display: flex;
  }

  &__item {
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    background-color: rgb(0, 0, 0);
    margin: 0 20px;
    border: 2px solid #fff;
    border-radius: 4px;
  }
  &__item:hover {
    background-color: #fff;
  }

  &__link {
    color: #fff;
    display: block;
    text-align: center;
    padding: 3px 10px;
    line-height: 42px;
  }
  &__link:hover {
    color: rgb(0, 0, 0);
  }
}
</style>
