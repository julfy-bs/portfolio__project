<template lang="pug">

  header.header
    .container.header__container
      .header__left
        .header__avatar.avatar
          img(src='../../images/content/user.jpg' alt="Avatar").avatar__pic
        .header__name Богдан Сутужко
        .header__note Панель администрирования
      .header__right
        .header__links
          a.link(
            
            @click="logoutUser"
          ) Выйти
</template>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.header {
  padding-top: 15px;
  padding-bottom: 20px;
  background-color: $admin-footer;
  color: #fff;
}

.header__container {
  display: flex;
  align-items: center;

  @include phones {
    width: 90%;
  }
}

.header__left {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.header__avatar {
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  margin-right: 20px;
}

.avatar {
  border-radius: 50%;
  overflow: hidden;
}

.avatar__pic {
  width: 100%;
  object-fit: cover;
  object-position: top;
}

.header__name {
  font-size: 18px;
  margin-right: 28px;
}

.header__note {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.5;

  @include phones {
    display: none;
  }
}

.link {
  font-weight: 400;
  text-decoration: underline;
  opacity: 0.7;

  &:hover {
    opacity: 0.4;
  }
}

</style>

<script>
import svgIcon from './svgIcon';
import { mapActions } from 'vuex';

export default {
  components: { svgIcon },
  methods: {
    ...mapActions("user", ["logout"]),
    logoutUser() {
      this.logout();
      this.$router.replace("/login");
    }
  }
};
</script>
