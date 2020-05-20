<template lang="pug">
  .headline-component
    .content
      slot
      .desc Панель администрирования
    button(
      type="button"
      @click=""
    ).logout Выйти
    
</template>
<script>
export default {};
</script>
<style lang="postcss" scoped>
.headline-component {
  background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  padding: 20px 60px;
  display: flex;
  align-items: center;
  color: #fff;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row nowrap;
}

.logout {
  margin-left: auto;
  color: inherit;
  opacity: 0.7;
  line-height: 24px;
  text-decoration: underline;
}

.desc {
  opacity: 0.5;
  color: #ffffff;
  font-size: 14px;
  line-height: 34px;
  margin-left: 30px;
  padding-top: 1.5%;
}
</style>