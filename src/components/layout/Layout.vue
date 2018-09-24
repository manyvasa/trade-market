<template>
  <div class="layout">
    <div class="market-left-side">
      <order-tool class="box--mb"/>
      <acc-Tool/>
    </div>
    <div class="market-right-side">
      <Graph-Trades-Mini/>
      <div>2</div>
    </div>
  </div>
</template>

<script>
import orderTool from './Order-Tool/Order-Tool';
import accTool from './Acc-Tool';
import GraphTradesMini from './Graph-trades-mini';

export default {
  name:       'Layout',
  components: {
    orderTool,
    accTool,
    GraphTradesMini,
  },
};
</script>

<style lang="scss" scoped>

  .layout {
    display: flex;
    padding: 8px 4px;
  }

  .market-left-side {
    flex: 0 0 352px;
  }

  .market-right-side {
    flex-grow: 1;
  }

  .box {
    &--mb {
      margin-bottom: 8px;
    }
    &--mr {
      margin-right: 8px;
    }
  }
</style>
