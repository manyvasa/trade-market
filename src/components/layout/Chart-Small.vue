<template>
  <div :class="$style.layout">
    Chart small
  </div>
</template>

<script>
export default {
  name: 'ChartSmall',
};
</script>

<style lang="scss" module>
  @import "@/styles/mixins.scss";

  .layout {
    @extend %card-layout;
    height: 180px;
    margin-bottom: 8px;

  }
</style>
