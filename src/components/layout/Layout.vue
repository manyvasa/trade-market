<template>
  <div class="layout">
    <div class="market-left-side">
      <order-tool class="box--mb"/>
      <acc-Tool/>
    </div>
    <div class="market-right-side">
      <Graph-Trades-Mini/>
      <div class="inner-left">
        <Chart-Large/>
        <Open-Orders/>
        <Trade-History/>
      </div>
      <div class="inner-right">
        <Chart-Small/>
        <Order-Book></Order-Book>
      </div>
    </div>
  </div>
</template>

<script>
import orderTool from './Order-Tool/Order-Tool';
import accTool from './Acc-Tool';
import GraphTradesMini from './Graph-trades-mini';
import ChartLarge from './Chart-Large';
import OpenOrders from './Open-Orders';
import TradeHistory from './Trade-History';
import ChartSmall from './Chart-Small';
import OrderBook from './Order-Book';

export default {
  name:       'Layout',
  components: {
    orderTool,
    accTool,
    GraphTradesMini,
    ChartLarge,
    OpenOrders,
    TradeHistory,
    ChartSmall,
    OrderBook,
  },
};
</script>

<style lang="scss" scoped>

  .layout {
    display: flex;
    padding: 8px 4px;
    justify-content: center;
    max-width: 1880px;
    min-width: 1400px;
    margin: 0 auto;
  }

  .market-left-side {
    width: 24%;
    max-width: 352px;
  }

  .market-right-side {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .inner-left {
    display: flex;
    width: 76%;
    padding: 0 8px 0 8px;
    flex-wrap: wrap;
  }

  .inner-right {
    width: 21.5%;
    display: flex;
    flex-direction: column;
    flex: 1 1 214px;
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
