<template>
  <main class="main">
    <div class="content">
      <div class="content__user user">
        <img class="user__img" alt="" />

        <div class="user__name">shouya.kousuge</div>
        <!-- 詳細アイコン -->
        <div class="user__editing-icon">
          <font-awesome-icon icon="ellipsis-v"></font-awesome-icon>
        </div>
      </div>
      <div class="content__information">
        <div class="content__movie">
          <iframe
            src="https://www.youtube.com/embed/fzQ6gRAEoy0"
            class="content__iframe"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="content__title">
          <a>Shelter</a>
        </div>
        <p class="content__message">素晴らしい音楽です。</p>
      </div>
      <div class="content__option">
        <div class="content__category">
          <a class="content__category-link" href="#"> POP </a>
        </div>
        <a class="content__option-icon" href="">
          <font-awesome-icon
            icon="heart"
            class="content__option-icon--heart"
          ></font-awesome-icon>
        </a>
        <a class="content__option-icon" href="">
          <font-awesome-icon
            icon="share-alt"
            class="content__option-icon--share"
          ></font-awesome-icon>
        </a>
      </div>
    </div>
    <div class="content">
      <div class="content__user user">
        <img class="user__img" alt="" />

        <div class="user__name">shouya.kousuge</div>
        <!-- 詳細アイコン -->
        <div class="user__editing-icon">
          <font-awesome-icon icon="ellipsis-v"></font-awesome-icon>
        </div>
      </div>
      <div class="content__information">
        <div class="content__movie">
          <iframe
            src="https://www.youtube.com/embed/fzQ6gRAEoy0"
            class="content__iframe"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="content__title">
          <a>Shelter</a>
        </div>
        <p class="content__message">素晴らしい音楽です。</p>
      </div>
      <div class="content__option">
        <div class="content__category">
          <a class="content__category-link" href="#"> POP </a>
        </div>
        <a class="content__option-icon" href="">
          <font-awesome-icon
            icon="heart"
            class="content__option-icon--heart"
          ></font-awesome-icon>
        </a>
        <a class="content__option-icon" href="">
          <font-awesome-icon
            icon="share-alt"
            class="content__option-icon--share"
          ></font-awesome-icon>
        </a>
      </div>
    </div>
    <div class="content">
      <div class="content__user user">
        <img class="user__img" alt="" />

        <div class="user__name">shouya.kousuge</div>
        <!-- 詳細アイコン -->
        <div class="user__editing-icon">
          <font-awesome-icon icon="ellipsis-v"></font-awesome-icon>
        </div>
      </div>
      <div class="content__information">
        <div class="content__movie">
          <iframe
            src="https://www.youtube.com/embed/fzQ6gRAEoy0"
            class="content__iframe"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="content__title">
          <a>Shelter</a>
        </div>
        <p class="content__message">素晴らしい音楽です。</p>
      </div>
      <div class="content__option">
        <div class="content__category">
          <a class="content__category-link" href="#"> POP </a>
        </div>
        <a class="content__option-icon" href="">
          <font-awesome-icon
            icon="heart"
            class="content__option-icon--heart"
          ></font-awesome-icon>
        </a>
        <a class="content__option-icon" href="">
          <font-awesome-icon
            icon="share-alt"
            class="content__option-icon--share"
          ></font-awesome-icon>
        </a>
      </div>
    </div>
    <div class="content">
      <div class="content__user user">
        <img class="user__img" alt="" />

        <div class="user__name">shouya.kousuge</div>
        <!-- 詳細アイコン -->
        <div class="user__editing-icon">
          <font-awesome-icon icon="ellipsis-v"></font-awesome-icon>
        </div>
      </div>
      <div class="content__information">
        <div class="content__movie">
          <iframe
            src="https://www.youtube.com/embed/fzQ6gRAEoy0"
            class="content__iframe"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="content__title">
          <a>Shelter</a>
        </div>
        <p class="content__message">素晴らしい音楽です。</p>
      </div>
      <div class="content__option">
        <div class="content__category">
          <a class="content__category-link" href="#"> POP </a>
        </div>
        <a class="content__option-icon" href="">
          <font-awesome-icon
            icon="heart"
            class="content__option-icon--heart"
          ></font-awesome-icon>
        </a>
        <a class="content__option-icon" href="">
          <font-awesome-icon
            icon="share-alt"
            class="content__option-icon--share"
          ></font-awesome-icon>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/sass/_variables';

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
  width: 40%;
  max-width: 600px;
  margin: 3rem auto;
  padding: 1rem;
  border: 2px solid #000000;
  border-radius: 4px;
  background: #fff;
  box-shadow: 4px 4px 6px gray;

  &__user {
    margin: 1.5rem 1rem;
  }

  &__movie {
    position: relative;
    padding-bottom: 56.25%;
    /*アスペクト比 16:9の場合の縦幅*/
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
    height: 7.2rem;
    font-size: 3.6rem;
    font-weight: bold;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
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
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;

    &-icon {
      display: block;
      padding: 0 1rem;
      cursor: pointer;
    }

    &-icon--heart {
      color: #fd0001;
      font-size: 3.2rem;
    }

    &-icon--share {
      color: #69abe8;
      font-size: 3.2rem;
    }
  }

  &__category {
    color: #fff;
    border: 2px solid #000000;
    border-radius: 6px;
    box-shadow: 2px 2px 4px gray;
    padding: 0 1rem;
    font-size: 1.6rem;
    line-height: 3.2rem;
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
    margin: 2rem auto 1rem;

    &__title {
      font-size: 2.4rem;
      height: 4.8rem;
    }

    &__message {
      font-size: 1.6rem;
    }
  }
}

.user {
  display: flex;

  &__name {
    line-height: 3rem;
    font-size: 2.5rem;
    flex: 1;
  }

  &__editing-icon {
    font-size: 3.2rem;
    cursor: pointer;
    position: relative;
  }

  &__img {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    margin-right: 1rem;
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
    font-size: 2.4rem;
    padding: 1rem;
    width: 15rem;
    position: absolute;
    top: -1rem;
    left: 0;
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
  padding: 2rem;
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
    padding: 4rem 0 6.5rem;
  }

  &__buttons {
    text-align: right;
  }

  &__button {
    cursor: pointer;
    padding: 0.5rem 2rem;
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
    margin: 3rem;
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
      margin: 1rem;
    }

    &__plus-icon {
      font-size: 6.4rem;
    }
  }
}
</style>
