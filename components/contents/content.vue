<template>
  <main class="main">
    <div v-for="post in posts" :key="post.id" class="content">
      <div class="content__user user">
        <img class="user__img" :src="post.userData.photoURL" />

        <div class="user__name">{{ post.userData.displayName }}</div>
        <div class="user__editing-icon" @click="togglePopup(post)">
          <i class="fas fa-ellipsis-v"></i>
          <div :class="{ popup: post.popup }">
            <div class="popup__inner" @click="showModal(post)">
              <p>投稿を削除</p>
            </div>
            <div class="popup__bg"></div>
          </div>
        </div>
        <div class="modal" :class="{ modal__hidden: post.isHidden }">
          <p class="modal__title">投稿を削除</p>
          <p class="modal__text">{{ modalText }}</p>

          <div class="modal__buttons">
            <button
              class="modal__button modal__cancel"
              @click="hiddenModal(post)"
            >
              キャンセル
            </button>
            <button
              class="modal__button modal__delete"
              :class="{ 'modal__delete--hidden': isDeleteHidden }"
              @click="postDelete(post)"
            >
              削除する
            </button>
          </div>
        </div>
        <div
          class="modal__mask"
          :class="{ modal__hidden: post.isHidden }"
          @click="hiddenModal(post)"
        ></div>
      </div>
      <div class="content__information">
        <div class="content__movie">
          <iframe
            :src="post.url"
            class="content__iframe"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="content__title">
          <p>{{ post.name }}</p>
        </div>
        <p class="content__message">{{ post.message }}</p>
      </div>
      <div class="content__option">
        <div class="content__category" :class="[post.category]">
          <a class="content__category-link" href="#">{{ post.category }}</a>
        </div>
        <a class="content__option-icon" :href="post.url">
          <i class="fab fa-youtube content__option-icon--youtube"></i>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  data() {
    return {
      posts: [],
      modalText: '',
      isDeleteHidden: true,
      currentUID: null,
      db: null,
    }
  },
  created() {
    this.db = firebase.firestore()

    const user = firebase.auth().currentUser
    if (user) {
      this.currentUID = user.uid
    } else {
      console.log('未認証です。')
    }
  },
  mounted() {
    const collection = this.db.collection('posts')

    collection
      .orderBy('createdAt', 'desc')
      .get()
      .then((querySnapshot) => {
        this.posts = []
        querySnapshot.forEach((doc) => {
          const postsData = doc.data()
          postsData.id = doc.id
          if (postsData.userID) {
            postsData.userID.get().then((res) => {
              postsData.popup = true
              postsData.isHidden = true
              postsData.userData = res.data()
              this.posts.push(postsData)
            })
          }
        })
      })
  },
  methods: {
    togglePopup(posts) {
      posts.popup = !posts.popup
    },
    showModal(post) {
      post.isHidden = false
      if (post.userID.id === this.currentUID) {
        this.modalText = '本当にこの投稿を削除してもよろしいですか？'
        this.isDeleteHidden = false
      } else {
        this.modalText = '投稿者しか投稿を削除する事は出来ません。'
        this.isDeleteHidden = true
      }
    },
    hiddenModal(posts) {
      posts.isHidden = true
    },
    postDelete(post) {
      const collection = this.db.collection('posts')

      collection
        .doc(post.id)
        .delete()
        .then(function () {
          location.reload()
          console.log('Document successfully deleted!')
        })
        .catch(function (error) {
          console.error('Error removing document: ', error)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_variables';

.main {
  width: 100%;
  padding-bottom: 40px;
  position: absolute;
  top: 12%;
  background-color: rgb(216, 216, 216);
  overflow-y: hidden;
  display: flex;
  flex-wrap: wrap;

  @include mq-sm {
    position: absolute;
    top: 11%;
  }
}

.content {
  width: 38%;
  max-width: 600px;
  margin: 30px auto;
  padding: 10px;
  border: 2px solid #000000;
  border-radius: 4px;
  background: #fff;
  box-shadow: 4px 4px 6px gray;

  &__user {
    margin: 15px 10px;
  }

  &__movie {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
  }

  &__iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__title {
    height: 72px;
    font-size: 3.6rem;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__message {
    font-size: 2.1rem;
    padding-left: 5px;
    margin-left: 5px;
    border-left: 4px solid rgb(0, 123, 255);
  }

  &__option {
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;

    &-icon {
      display: block;
      cursor: pointer;
      padding: 0 3px;
      border: 1px solid gray;
      border-radius: 6px;
    }

    &-icon--youtube {
      color: #fd0001;
      font-size: 3.2rem;
    }
  }

  &__category {
    color: #fff;
    border: 2px solid #000000;
    border-radius: 6px;
    box-shadow: 2px 2px 4px gray;
    padding: 0 10px;
    font-size: 1.6rem;
    line-height: 32px;
    margin-right: auto;

    &-link {
      display: block;
      color: white;
      text-shadow: 1px 1px 1px #000000;
    }
  }

  // .content
  @include mq-sm {
    width: 90%;
    margin: 20px auto 10px;

    &__title {
      font-size: 2.4rem;
      height: 48px;
    }

    &__message {
      font-size: 1.6rem;
    }
  }
}

.user {
  display: flex;

  &__name {
    line-height: 30px;
    font-size: 2.5rem;
    flex: 1;
  }

  &__editing-icon {
    font-size: 3.2rem;
    cursor: pointer;
    position: relative;
  }

  &__img {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    border-radius: 50%;
  }
}

.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;

  &__inner {
    font-size: 2.2rem;
    padding: 15px;
    width: 150px;
    position: absolute;
    top: -10px;
    left: -35px;
    z-index: 2;
    border: 1px solid black;
    border-radius: 4px;
    background: #fafafa;
    box-shadow: 4px 4px 6px gray;

    @include mq-sm {
      position: absolute;
      top: -10px;
      left: -110px;
    }
  }

  &__bg {
    background-color: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 0.1;
  }
}

.modal {
  width: 600px;
  height: 240px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 2rem;
  box-shadow: 4px 4px 6px gray;
  position: fixed;
  top: 30%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 6;

  @include mq-sm {
    width: 95%;
    height: 260px;
  }

  &__title {
    font-size: 3.2rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.87);
  }

  &__text {
    font-size: 2.4rem;
    padding: 40px 0 65px;
  }

  &__buttons {
    text-align: right;
  }

  &__button {
    cursor: pointer;
    padding: 5px 20px;
    border-radius: 6px;
  }

  &__cancel {
    color: rgba(0, 0, 0, 0.54);
    background-color: transparent;
    border: none;

    &:hover {
      background-color: rgb(218, 216, 216);
    }
  }

  &__delete {
    color: #fff;
    background-color: rgb(211, 47, 47);
    border-color: rgb(211, 47, 47);

    &:hover {
      background-color: rgb(168, 38, 38);
    }

    &--hidden {
      display: none;
    }
  }

  &__mask {
    background-color: gray;
    opacity: 0.6;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
  }

  &__hidden {
    display: none;
  }
}

.ロック {
  background-color: #fd0001;
}

.ジャズ {
  background-color: rgb(0, 123, 255);
}

.クラシック {
  background-color: #999999;
  padding: 0;
}

.POP {
  background-color: #fee21d;
}

.ポップス {
  background-color: #fee21d;
}

.J-POP {
  background-color: #fe6600;
}

.アニソン {
  background-color: #1aff00;
}

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
    font-size: 9.6rem;
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
