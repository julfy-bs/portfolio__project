<template lang="pug">
  .title-component
    .title Блок «Обо мне»
    slot
</template>
<script>
export default {};
</script>
<style lang="postcss" scoped>
.title-component {
  display: flex;
  flex-flow: row nowrap;
}
.title {
  color: #414c63;
  font-size: 21px;
  font-weight: 700;
  line-height: 34px;
}
</style>