<template>
  <div :class="$style.layout">
    <table :class="[$tables.common, $style.history]">
      <thead>
        <tr>
          <td>Trade Size</td>
          <td>Price (USD)</td>
          <td>Time</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data"
            :key="item.id">
          <td>{{ item.size }}</td>
          <td>
            <span :class="[item.change === 'up' ? [$style.up]: [$style.down]]"
            >
              {{ item.price }}
            </span>
          </td>
          <td>{{ item.time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TradeHistory',
  data() {
    return {
      n:    1,
      data: [
        {id:    1, size:  '96.08843100', price: '47537.85', time:  '05:49:14', change: 'up'},
        {id:    2, size:  '0.85700000', price: ' 879.90', time:  '01:25:26', change: 'down'},
        {id:    3, size:  '0.28059600', price: ' 654.54', time:  '16:13:31', change: 'up'},
        {id:    4, size:  '122.27249800', price: ' 65765.98', time:  '00:10:31', change: 'up'},
        {id:    5, size:  '96.08843100', price: '47537.85', time:  '05:49:14', change: 'down'},
        {id:    6, size:  '0.85700000', price: ' 879.90', time:  '01:25:26', change: 'down'},
        {id:    7, size:  '0.28059600', price: ' 654.54', time:  '16:13:31', change: 'down'},
        {id:    8, size:  '122.27249800', price: ' 65765.98', time:  '00:10:31', change: 'down'},
        {id:    9, size:  '96.08843100', price: '47537.85', time:  '05:49:14', change: 'down'},
        {id:    10, size:  '0.85700000', price: ' 879.90', time:  '01:25:26', change: 'down'},
        {id:    11, size:  '0.28059600', price: ' 654.54', time:  '16:13:31', change: 'down'},
        {id:    12, size:  '122.27249800', price: ' 65765.98', time:  '00:10:31', change: 'up'},
        {id:    13, size:  '96.08843100', price: '47537.85', time:  '05:49:14', change: 'down'},
        {id:    14, size:  '0.85700000', price: ' 879.90', time:  '01:25:26', change: 'down'},
        {id:    15, size:  '0.28059600', price: ' 654.54', time:  '16:13:31', change: 'up'},
        {id:    16, size:  '122.27249800', price: ' 65765.98', time:  '00:10:31', change: 'down'},
      ],
    };
  },
};
</script>

<style src="@/styles/tables.scss" lang="scss" module="$tables">
</style>

<style lang="scss" module>
  @import "@/styles/variables.scss";

  .layout {
    background-color: #FFFFFF;
    border-radius: 4px;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.14),
    0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 1px 3px 0 rgba(0, 0, 0, 0.2);
    flex: 0 1 200px;
  }

  .history {
    font-family: $display-font-stack;
    thead, tbody {
      display: block;
    }

    tbody {
      height: 230px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    td {
      width: 9%;
      text-align: center;
    }
  }

  .up { color: #33A36D;}
  .down { color: #D96A36;}

</style>
