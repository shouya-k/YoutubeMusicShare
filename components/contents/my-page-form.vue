<template>
  <div class="profile">
    <div class="profile__inner">
      <h1 class="profile__title">プロフィール</h1>
      <form class="form">
        <div class="form__images">
          <img
            class="form__image"
            src="../assets/img/mobile-605422_1920.jpg"
            alt=""
          />
          <label class="form__file"
            ><i class="fas fa-camera"></i>
            <input
              type="file"
              name="photo"
              accept="image/*"
              style="display: none"
            />
          </label>
        </div>
        <p class="form__created-at">アカウントの作成: 2020.11.03</p>
        <p class="form__label">ユーザー名</p>
        <div class="form__item">
          <i class="fas fa-edit form__icon"></i>
          <input class="form__input" type="text" placeholder="shouya" />
        </div>
        <p class="form__label">Eメールアドレス</p>
        <div class="form__item">
          <i class="fas fa-envelope form__icon"></i>
          <input class="form__input" type="email" placeholder="test@test.com" />
        </div>
        <input class="form__submit" type="submit" value="更新" />
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.profile {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgb(216, 216, 216);

  &__inner {
    width: 30%;
    margin: 180px auto 0;
    text-align: center;
    font-size: 1.6rem;
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
    margin-bottom: 20px;
  }

  &__label {
    font-weight: bold;
    padding-bottom: 10px;
  }

  &__item {
    display: flex;
    font-size: 1.4rem;
    padding: 6px 0;
    margin-bottom: 30px;
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: 6px;
  }

  &__icon {
    margin: auto 10px;
  }

  &__input {
    outline: 0;
    width: 100%;
    border: 0;
    padding: 5px;
    box-sizing: border-box;
    font-size: 14px;

    &_empty {
      background-color: #fdd9d6;
    }
  }

  &__submit {
    width: 30%;
    margin: 0 auto 20px;
    font-size: 1.8rem;
    color: #000000;
    padding: 5px 0;
    background-color: #fff;
    border: 1px solid rgba(34, 36, 38, 1);
    border-radius: 6px;

    &:hover {
      color: #fff;
      background-color: #000000;
    }
  }
}
</style>
