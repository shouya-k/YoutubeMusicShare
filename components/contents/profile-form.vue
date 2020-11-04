<template>
  <div class="profile">
    <div class="profile__inner">
      <h1 class="profile__title">プロフィール</h1>
      <form
        class="form"
        v-for="user in users"
        :key="user.id"
        @submit.prevent="updateUser"
      >
        <div class="form__images">
          <img v-if="image" class="form__image" :src="image" alt="" />
          <img v-else class="form__image" :src="user.photoURL" alt="" />

          <label class="form__file"
            ><i class="fas fa-camera"></i>
            <input
              type="file"
              @change="onImageUploaded"
              style="display: none"
            />
          </label>
        </div>
        <p class="form__created-at">アカウントの作成: {{ user.createdAt }}</p>
        <p class="form__label">ユーザー名</p>
        <div class="form__item">
          <i class="fas fa-edit form__icon"></i>
          <input
            v-model="name"
            class="form__input"
            type="text"
            :placeholder="user.displayName"
          />
          <button class="form__submit" @click.prevent="updateName">更新</button>
        </div>
        <p class="form__label">Eメールアドレス</p>
        <div class="form__item">
          <i class="fas fa-envelope form__icon"></i>
          <input
            v-model="email"
            class="form__input"
            type="email"
            :placeholder="user.email"
          />
          <button
            class="form__submit"
            @click.prevent="updateEmail(user.signProvider)"
          >
            更新
          </button>
        </div>
      </form>

      <div class="error" :class="{ error__visible: isVisible }">
        <h2 class="error__title">エラー</h2>
        <p class="error__message">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  data() {
    return {
      currentUID: null,
      db: null,
      users: [],
      uploadImage: false,
      image: null,
      name: '',
      email: '',
      isVisible: false,
      errorMessage: '',
    }
  },
  mounted() {
    this.db = firebase.firestore()

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.currentUID = user.uid
        const docRef = this.db.collection('users').doc(user.uid)

        docRef.get().then((doc) => {
          const userData = doc.data()
          this.users.push(userData)
        })
      } else {
        console.log('未認証')
      }
    })
  },
  methods: {
    onImageUploaded(e) {
      const image = e.target.files[0]
      this.createImage(image)
    },
    createImage(image) {
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = () => {
        this.image = reader.result

        const docRef = this.db.collection('users').doc(this.currentUID)
        docRef.update({
          photoURL: this.image,
        })
      }
    },
    updateName() {
      if (this.name !== '') {
        const docRef = this.db.collection('users').doc(this.currentUID)
        docRef
          .update({
            displayName: this.name,
          })
          .then(() => {
            location.reload()
          })
      }
    },
    updateEmail(login) {
      if (login === 'google.com') {
        this.isVisible = true
        this.errorMessage =
          'googleログインのユーザはメールアドレスを変更出来ません。'
      } else if (this.email !== '') {
        const docRef = this.db.collection('users').doc(this.currentUID)
        docRef
          .update({
            email: this.email,
          })
          .then(() => {
            location.reload()
          })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_variables';
.profile {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgb(216, 216, 216);

  @include mq-sm {
    overflow: visible;
    background-color: #fff;
    min-height: 600px;
  }

  &__inner {
    width: 30%;
    margin: 160px auto 0;
    text-align: center;
    font-size: 1.6rem;

    @include mq-sm {
      width: 80%;
      margin: 120px auto;
    }
  }

  &__title {
    font-size: 2.6rem;
    font-weight: bold;
    color: black;
    margin-bottom: 20px;
  }
}

.form {
  padding: 20px 20px 10px;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);

  &__images {
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
  }

  &__image {
    display: block;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 1px solid rgba(34, 36, 38, 0.15);
    margin: 0 auto;
  }

  &__file {
    position: absolute;
    font-size: 2.6rem;
    height: 25px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    color: #fff;
  }

  &__created-at {
    color: rgb(160, 158, 158);
    margin-bottom: 25px;
  }

  &__label {
    font-weight: bold;
    padding-bottom: 10px;
  }

  &__item {
    display: flex;
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: 40px;
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: 6px;
  }

  &__icon {
    margin: auto 10px;
  }

  &__input {
    width: 80%;
    outline: 0;
    border: 0;
    padding: 5px;
    box-sizing: border-box;
    font-size: 14px;
  }

  &__submit {
    width: 20%;
    display: block;
    font-size: 1.8rem;
    color: rgba(34, 36, 38, 0.8);
    padding: 5px 0;
    background-color: #fff;
    border: 1px solid rgba(34, 36, 38, 0.5);
    border-radius: 6px;

    &:hover {
      color: #fff;
      background-color: rgba(34, 36, 38, 0.8);
    }
  }
}

.error {
  display: none;
  color: #9f3a39;
  background-color: #fff6f6;
  padding: 15px 0;
  margin-bottom: 15px;
  border: 1px solid #e0b5b4;
  border-radius: 4px;

  &__title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0 10px 15px;
  }

  &__message {
    font-size: 1.4rem;
    margin: 0 10px;
  }

  &__visible {
    display: block;
  }
}
</style>
