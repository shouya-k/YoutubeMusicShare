<template>
  <nuxt-link to="/posts" class="footer__icon">
    <font-awesome-icon
      icon="plus-circle"
      class="footer__plus-icon"
    ></font-awesome-icon>
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/sass/_variables';

.footer {
  &__icon {
    margin: 30px;
    position: fixed;
    right: 0;
    bottom: 0;
  }

  &__plus-icon {
    color: #69abe8;
    background-color: #fff;
    font-size: 10rem;
    border: 1px solid #69abe8;
    border-radius: 50%;
  }

  @include mq-sm {
    &__icon {
      margin: 10px;
    }

    &__plus-icon {
      font-size: 6.4rem;
    }
  }
}
</style>
