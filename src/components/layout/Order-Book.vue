<template>
  <div :class="$style.layout">
    <div :class="$style.head">
      <div :class="$style.left">
        <span>Depth (8)</span>
        <button>
          <svg :class="['icon',$style.navigation]"
               width="24"
               height="24">
            <use xlink:href="#icon-navigation-more"/>
          </svg>
        </button>
      </div>
      <div :class="$style.right">
        <span>Price USD</span>
      </div>
    </div>
    <div :class="$style.wrapper">
      <div :class="$style.inner">
        <table :class="$style.depth">
          <tbody>
            <tr
                v-for="item in data"
                :key="item.id"
            >
              <td>
                <div :class="[$style.percent, $style.red]" :style="{width: item.percent + '%'}"></div>
              </td>
              <td>{{ item.column_1}}</td>
              <td>{{ item.column_2}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div :class="$style.divider">
        <div>USD Spread</div>
        <div>0.01</div>
      </div>
      <div :class="$style.inner">
        <table :class="$style.depth">
          <tbody>
          <tr
              v-for="item in data"
              :key="item.id"
          >
            <td>
              <div :class="[$style.percent, $style.green]" :style="{width: item.percent + '%'}"></div>
            </td>
            <td>{{ item.column_1}}</td>
            <td>{{ item.column_2}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderBook',
  data() {
    return {
      data: [
        { id: 1, column_1: '0.2474500', column_2: '11060.33', percent: 10 },
        { id: 2, column_1: '0.3800495', column_2: '11133.90', percent: 20 },
        { id: 3, column_1: '0.6307688', column_2: '11430.48', percent: 30 },
        { id: 4, column_1: '0.1769000', column_2: '11977.95', percent: 40 },
        { id: 5, column_1: '2.1901195', column_2: '11796.84', percent: 0 },
        { id: 6, column_1: '0.3897438', column_2: '11803.02', percent: 100 },
        { id: 7, column_1: '0.2181000', column_2: '11773.91', percent: 0 },
        { id: 8, column_1: '0.0684162', column_2: '11034.47', percent: 34 },
        { id: 9, column_1: '10.2608332', column_2: '11134.28', percent: 62 },
        { id: 10, column_1: '0.8691563', column_2: '11255.22', percent: 34 },
        { id: 11, column_1: '1.2029500', column_2: '11957.68', percent: 12 },
        { id: 12, column_1: '0.2986390', column_2: '11389.66', percent: 72 },
        { id: 13, column_1: '0.1581330', column_2: '11436.51', percent: 55 },
        { id: 14, column_1: '1.6548900', column_2: '11011.85', percent: 99 },
        { id: 15, column_1: '0.4805000', column_2: '11423.53', percent: 44 },
      ],
    };
  },
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
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #F3F3F3;
    box-shadow: 0 1px 1.25px 0 rgba(0,0,0,0.5);
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    opacity: 0.5;
    color: #4E5652;
  }

  .wrapper {
    height: 532px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .wrapper::-webkit-scrollbar{
    width: 4px;
  }

  .wrapper::-webkit-scrollbar-thumb{
    border-width:1px 1px 1px 2px;
    border-color: #777;
    background-color: #aaa;
  }

  .left span,
  .right span {
    display: inline-block;
    padding: 8px 16px;
  }

  .inner {
    position: relative;
    padding: 4px 16px;
  }

  .depth {
    position: relative;
    top: 0;
    left: 0;
  }

  .depth tbody tr {
    border-bottom: 2px solid transparent;
  }

  .depth td:nth-child(1) {
    position: absolute;
    left: 0;
    right: 0;
    border-bottom: 2px solid transparent;
  }

  .percent {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    z-index: 1;
    pointer-events: none;
    opacity: .2;
  }

  .green {
    background-color: #00b275;
  }

  .red {
    background-color: #D96A36;
  }

  .divider {
    background-color: #F4F5F5;
    height: 32px;
    display: flex;
    justify-content: space-between;
    padding: 4px 16px;
    color: #4E5652;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    align-items: center;
  }
</style>
