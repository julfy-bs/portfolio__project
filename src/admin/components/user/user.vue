<template lang="pug">
  .user-component
    .avatar
      img(:src="userpic")
    .username {{username}}
</template>
<script>
export default {
  props: ["userpic", "username"]
};
</script>

<style lang="postcss" scoped>
.avatar {
  width: 45px;
  height: 45px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 20px;
}

.user-component {
  display: flex;
  align-items: center;
}

.username {
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  line-height: 34px;
}
</style>