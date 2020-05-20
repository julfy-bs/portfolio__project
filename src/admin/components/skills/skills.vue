<template lang="pug">
  .skills-component
    .skills-container
      .header
        input(
          placeholder="Название новой группы"  
        )
        .svg-wrapper
          - var icons = ["tick", "remove"]
            each item in icons
              +icon(item, "edit-button")
      .content

    
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
</style>