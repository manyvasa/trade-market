<template>
  <div :class="$style.layout">
    Order Book
  </div>
</template>

<script>
export default {
  name: 'OrderBook',
};
</script>

<style lang="scss" module>
  .layout {
    background-color: #FFFFFF;
    border-radius: 2px 2px 0 0;
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.14),
    0 2px 2px 0 rgba(0,0,0,0.12),
    0 1px 3px 0 rgba(0,0,0,0.2);
    width: 100%;
    height: 480px;
    margin-bottom: 8px;

  }
</style>
