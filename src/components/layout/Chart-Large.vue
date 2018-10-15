<template>
  <div :class="$style.layout">
    f
  </div>
</template>

<script>
export default {
  name: 'ChartLarge',
};
</script>

<style lang="scss" module>
  @import "@/styles/mixins.scss";

  .layout {
    @extend %card-layout;
    height: 480px;
    margin-bottom: 8px;

  }

</style>
