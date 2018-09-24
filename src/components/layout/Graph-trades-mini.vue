<template>
  <div :class="$style.root">
    <div
      v-for="item in data"
      :key="item.name"
      :class="$style.item"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'GraphTradesMini',
  data() {
    return {
      data: [
        { name: 'BTC' },
        { name: 'ETH' },
        { name: 'LTC' },
        { name: 'XRP' },
        { name: 'BTCH' },
      ],
    };
  },
};
</script>

<style lang="scss" module>
  .root {
    display: flex;
    background-color: aqua;
  }

  .item {
    flex: 1 0 208px;
    height: 64px;
    border-left: 1px solid;
    border-right: 1px solid;
  }

</style>
