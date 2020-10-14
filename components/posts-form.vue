<template>
  <main class="main-post">
    <form class="post" @submit.prevent="addMusic">
      <h1 class="post__title">オススメの投稿</h1>
      <div class="post__input-text">
        <input
          id="music-url"
          v-model="posts.music.url"
          class="post__input"
          type="url"
          placeholder="曲のURL"
        />
      </div>
      <div class="post__input-text">
        <input
          id="music-title"
          v-model="posts.music.name"
          class="post__input"
          type="text"
          placeholder="曲のタイトル"
        />
      </div>
      <div class="post__input-text">
        <input
          id="favorite-reason"
          v-model="posts.music.message"
          class="post__input"
          type="text"
          placeholder="オススメの理由"
        />
      </div>
      <div id="category" class="category">
        <h2 class="category__title">カテゴリ</h2>
        <ul class="category__menu">
          <li class="category__item">
            <input
              v-model="posts.music.category"
              type="radio"
              class="category__input"
              value="rock"
            />
            ロック
          </li>
          <li class="category__item">
            <input
              v-model="posts.music.category"
              type="radio"
              class="category__input"
              value="jazz"
            />
            ジャズ
          </li>
          <li class="category__item">
            <input
              v-model="posts.music.category"
              type="radio"
              class="category__input"
              value="classical"
            />
            クラシック
          </li>
          <li class="category__item">
            <input
              v-model="posts.music.category"
              type="radio"
              class="category__input"
              value="pop"
            />
            ポップス
          </li>
          <li class="category__item">
            <input
              v-model="posts.music.category"
              type="radio"
              class="category__input"
              value="j-pop"
            />
            J-POP
          </li>
          <li class="category__item">
            <input
              v-model="posts.music.category"
              type="radio"
              class="category__input"
              value="anime"
            />
            アニソン
          </li>
        </ul>
      </div>
      <div class="post__submit">
        <button class="post__submit-button" type="submit" value="send">
          投稿する
        </button>
      </div>
    </form>
  </main>
</template>

<script>
import { ADD_MUSIC } from '../apollo/queries/queries'
export default {
  data() {
    return {
      posts: {
        music: {
          url: '',
          name: '',
          message: '',
          category: 'rock',
        },
      },
    }
  },
  methods: {
    addMusic() {
      const { name, message, category, url } = this.posts.music
      this.$apollo
        .mutate({
          mutation: ADD_MUSIC,
          variables: {
            name,
            message,
            category,
            url,
          },
        })
        .then((data) => {
          console.log(data)
          location.replace('/timeline')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/_variables.scss';

.main-post {
  height: 950px;
  background-color: rgb(216, 216, 216);
}

.post {
  width: 50%;
  margin: 20px 0;
  position: absolute;
  top: 12%;
  left: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 2px solid #1e1bd3;
  border-radius: 6px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);

  &__title {
    font-weight: bold;
    font-size: 3.6rem;
    text-align: center;
    padding: 20px 0;
  }

  &__input-text {
    position: relative;
    width: 70%;
    margin: 40px auto;

    &::after {
      display: block;
      width: 100%;
      height: 4px;
      margin-top: -1px;
      content: '';
      border-width: 0 1px 1px 1px;
      border-style: solid;
      border-color: #1e1bd3;
    }
  }

  &__input {
    font: 1.5rem/2.4rem sans-serif;
    box-sizing: border-box;
    width: 100%;
    padding: 3px;
    padding-left: 10px;
    letter-spacing: 1px;
    border: 0;

    &:focus {
      outline: none;
    }

    &:focus::after {
      outline: none;
    }
  }

  &__submit {
    flex-direction: row;
    text-align: center;
    padding: 20px 0;

    &-button {
      width: 300px;
      height: 50px;
      color: #000000;
      background-color: #fff;
      border: 1px solid #1e1bd3;
      border-radius: 6px;
    }

    &-button:hover {
      background-color: rgb(240, 240, 240);
    }
  }

  //post
  @include mq-sm {
    width: 100%;
    position: absolute;
    top: 13%;
    left: 0;
    margin: 0;

    &__submit-button {
      border-radius: 6px;
    }
  }
}

.category {
  width: 70%;
  margin: 20px auto;
  text-align: left;

  &__title {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    padding-bottom: 20px;
  }

  &__menu {
    padding: 10px 20px;
    list-style: none;
    border: 1px solid #1e1bd3;
    border-radius: 4px;
  }

  &__item {
    font-size: 2rem;
    padding: 0;
    margin-bottom: 1rem;
  }

  &__input {
    width: 18px;
    height: 18px;
    position: relative;
    margin: 0 10px 0 0;
    cursor: pointer;
  }
}
</style>
