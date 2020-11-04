<template>
  <main class="posts">
    <form class="posts__form" @submit.prevent="submit()">
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

      <input type="submit" class="posts__submit" value="オススメの投稿" />
    </form>
  </main>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  props: ['currentUID'],
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
  methods: {
    submit() {
      const db = firebase.firestore()
      const collection = db.collection('posts')
      const usersDocRef = db.doc(`users/${this.currentUID}`)

      collection
        .add({
          createdAt: new Date().toLocaleString({
            timeZone: 'Asia/Tokyo',
          }),
          url: this.getURL(this.posts.url),
          name: this.posts.name,
          message: this.posts.message,
          category: this.posts.category,
          userID: usersDocRef,
        })
        .then(() => {
          location.replace('/timeline')
        })
    },
    getURL(url) {
      const musicID = this.getID(url)
      return `//www.youtube.com/embed/${musicID}`
    },
    getID(url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=)([^#]*).*/
      const match = url.match(regExp)
      if (match && match[2].length === 11) {
        return match[2]
      } else {
        return 'error'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_variables';
.posts {
  overflow: hidden;
  height: 100%;
  width: 100%;
  background-color: rgb(216, 216, 216);
  position: absolute;
  top: 0;

  @include mq-sm {
    background-color: #fff;
    overflow: visible;
  }

  &__form {
    width: 40%;
    margin: 160px auto;
    background-color: #fff;
    border: 2px solid rgba(12, 103, 207, 0.5);
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(12, 103, 207, 0.15);

    @include mq-sm {
      width: 100%;
      margin: 120px auto;
      border: 0;
      box-shadow: none;
    }
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

    @include mq-sm {
      width: 80%;
    }

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
    border: 1px solid rgba(34, 36, 38, 1);
    border-radius: 6px;

    @include mq-sm {
      width: 80%;
    }

    &:hover {
      color: #fff;
      background-color: #000000;
    }
  }
}

.category {
  width: 70%;
  margin: 0 auto 25px;
  border: 1px solid rgba(34, 36, 38, 1);
  border-radius: 6px;

  @include mq-sm {
    width: 80%;
  }

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
