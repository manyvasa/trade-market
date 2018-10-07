<template>
  <div :class="$style.layout">
    <div
      v-for="item in data"
      :key="item.name"
      :class="$style.item"
    >
      <div :class="$style.graph">
        <span :class="$style.label">{{ item.name }}</span>
      </div>
      <div :class="$style.indicators">
        <span :class="$style.price">{{ item.price }}</span>
        <span :class="$style.change">{{ item.change }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GraphTradesMini',
  data() {
    return {
      data: [
        { name: 'BTC', change: '+12.9%', price: '$11,590' },
        { name: 'ETH', change: '+34.2%', price: '$529' },
        { name: 'LTC', change: '-12.3%', price: '$162' },
        { name: 'XRP', change: '+9.4%', price: '$0.67' },
        { name: 'BTCH', change: '+19.7% ', price: '$999' },
      ],
    };
  },
};
</script>

<style lang="scss" module>
  @import "@/styles/variables.scss";

  .layout {
    display: flex;
    flex: 1 1 100%;
    background-color: #E9F2ED;
    padding: 6px 0 6px 0;
    margin: 0 0 4px 8px;
  }

  .item {
    display: flex;
    justify-content: space-between;
    flex: 1 1 208px;
    height: 64px;
    border-left: 1px solid #DCDCDC;
    padding: 4px 7px;

    &:last-child {
      border-right: 1px solid #DCDCDC;
    }
  }

  .graph,
  .indicators {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #4E5652;
  }

  .label {
    font-size: 12px;
    font-weight: 600;
    line-height: 17px;
  }

  .price {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.7px;
    line-height: 24px;
    text-align: right;
  }

  .change {
    font-family: $display-font-stack;
    font-size: 10px;
    line-height: 12px;
    text-align: right;
  }


</style>
