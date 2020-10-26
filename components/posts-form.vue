<template>
  <main class="posts">
    <form class="posts__form">
      <h1 class="posts__title">オススメの投稿</h1>
      <div class="posts__input">
        <input
          v-model="posts.url"
          class="posts__input--inner"
          type="url"
          placeholder="曲のURL"
        />
      </div>
      <div class="posts__input">
        <input
          v-model="posts.name"
          class="posts__input--inner"
          type="text"
          placeholder="曲のタイトル"
        />
      </div>
      <div class="posts__input">
        <input
          v-model="posts.message"
          class="posts__input--inner"
          type="text"
          placeholder="オススメの理由"
        />
      </div>

      <div class="category">
        <h2 class="category__title">カテゴリ</h2>
        <label class="category__label">
          <input
            v-model="posts.category"
            class="category__input"
            type="radio"
            value="ロック"
          />ロック
        </label>
        <label class="category__label">
          <input
            v-model="posts.category"
            class="category__input"
            type="radio"
            value="ジャズ"
          />ジャズ
        </label>
        <label class="category__label">
          <input
            v-model="posts.category"
            class="category__input"
            type="radio"
            value="クラシック"
          />クラシック
        </label>
        <label class="category__label">
          <input
            v-model="posts.category"
            class="category__input"
            type="radio"
            value="POP"
          />POP
        </label>
        <label class="category__label">
          <input
            v-model="posts.category"
            class="category__input"
            type="radio"
            value="J-POP"
          />J-POP
        </label>
        <label class="category__label">
          <input
            v-model="posts.category"
            class="category__input"
            type="radio"
            value="アニソン"
          />アニソン
        </label>
      </div>

      <button class="posts__submit">オススメを投稿する。</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      posts: {
        url: '',
        name: '',
        message: '',
        category: 'ロック',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.posts {
  overflow: hidden;
  height: 100%;
  width: 100%;
  background-color: rgb(216, 216, 216);
  position: absolute;
  top: 0;

  &__form {
    width: 40%;
    margin: 180px auto;
    background-color: #fff;
    border: 1px solid #1e1bd3;
    border-radius: 6px;
  }

  &__title {
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold;
    padding: 20px 0;
    margin-bottom: 20px;
  }

  &__input {
    width: 70%;
    margin: 0 auto 20px;

    &--inner {
      width: 100%;
      padding: 12px;
      font-size: 1.6rem;
    }
  }

  &__submit {
    width: 70%;
    display: block;
    margin: 0 auto 25px;
    padding: 10px 0;
    font-size: 1.8rem;
    color: #000000;
    background-color: #fff;
    border: 1px solid #000000;
    border-radius: 6px;

    &:hover {
      color: #fff;
      background-color: #000000;
    }
  }
}

.category {
  width: 70%;
  margin: 0 auto 25px;
  border: 1px solid black;
  border-radius: 6px;

  &__title {
    font-size: 2.2rem;
    font-weight: bold;
    text-align: center;
    padding: 10px;
  }

  &__label {
    font-size: 1.6rem;
    padding: 5px 20px;
    display: flex;

    &:last-child {
      margin-bottom: 5px;
    }
  }

  &__input {
    margin-right: 10px;
  }
}
</style>
