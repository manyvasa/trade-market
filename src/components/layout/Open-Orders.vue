<template>
  <div :class="$style.layout">
    <div :class="$style.head">
      <ul :class="$style.nav">
        <li
          v-for="tab in tabs"
          :key="tab"
        >
          <a
            :class="[$style.link, {[$style.active]: tab.isActive}]"
            href="#"
            @click.prevent="selectTab(tab)"
          >{{ tab.name }}</a>
        </li>
      </ul>
      <div :class="$style.control">
        <button>
          <svg
            class="icon"
            width="15"
            height="15"
          >
            <use xlink:href="#icon-search1"/>
          </svg>

          <symbol id="icon-search1" viewBox="0 0 32 32">
            <path fill="#C4CAC7" d="M31.715 28.953c0.381 0.381 0.381 0.999 0 1.381l-1.381 1.381c-0.382 0.381-1 0.381-1.381 0l-9.668-9.668c-0.105-0.105-0.175-0.229-0.222-0.361-1.983 1.449-4.418 2.314-7.063 2.314-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12 0 2.645-0.865 5.080-2.314 7.063 0.132 0.047 0.256 0.116 0.361 0.222l9.668 9.668zM12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8c0-4.418-3.582-8-8-8z"></path>
          </symbol>
        </button>
        <button>
          <svg :class="['icon',$style.navigation]"
               width="24"
               height="24">
            <use xlink:href="#icon-navigation-more"/>
          </svg>
        </button>
      </div>
    </div>
    <slot/>
    <tab :selected="true"
         name="Open Orders">
      <table :class="[$tables.common, $style.orders]">
        <thead>
          <tr>
            <td>Buy/Sell</td>
            <td :class="$tables.right">Size</td>
            <td :class="$tables.center">Currency</td>
            <td :class="$tables.right">Price (USD)</td>
            <td :class="$tables.center">Time</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in data"
            :key="item.id"
          >
            <td>{{ item.action }}</td>
            <td :class="$tables.right">{{ item.size }}</td>
            <td :class="$tables.center">{{ item.currency }}</td>
            <td :class="$tables.right">{{ item.price }}</td>
            <td :class="$tables.center">{{ item.time }}</td>
            <td>
              {{ item.status }}
              <button href="#">
                <svg :class="['icon',$style.navigation]"
                     width="24"
                     height="24">
                  <use xlink:href="#icon-navigation-more"/>
                </svg>
                <symbol id="icon-navigation-more"
                        view-box="0 0 20 20">
                  <title>navigation-more</title>
                  <path fill="#C4CAC7"
                        d="M4 12c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM10 12c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM16 12c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z"/>
                </symbol>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </tab>
    <tab name="Fills">
      <span>Fills</span>
    </tab>
  </div>
</template>

<script>
import tab from './Order-Tool/tab';

export default {
  name:       'OpenOrders',
  components: {
    tab,
  },
  data() {
    return {
      tabs: [],
      data: [
        {
          id:       1, action:   'Buy', size:     '1.08000', currency: 'BTC', price:    '$20,000.00', time:     '12:00', status:   'Open',
        },
        {
          id:       2, action:   'Buy', size:     '400.00000', currency: 'XRP', price:    '$0.85', time:     '23:00', status:   'Open',
        },
        {
          id:       3, action:   'Buy', size:     '100.00008', currency: 'XVG', price:    '$0.04', time:     '12:00', status:   'Open',
        },
        {
          id:       4, action:   'Buy', size:     '0.50000', currency: 'BTC', price:    '$9,500.00', time:     '12:54', status:   'Open',
        },
        {
          id:       5, action:   'Sell', size:     '1.12345', currency: 'LTC', price:    '$295.00', time:     '12:00', status:   'Open',
        },
        {
          id:       6, action:   'Buy', size:     '20.88000', currency: 'BTC', price:    '$17,927.91', time:     '11:18', status:   'Open',
        },
        {
          id:       7, action:   'Sell', size:     '1.12345', currency: 'LTC', price:    '$295.00', time:     '12:00', status:   'Open',
        },
        {
          id:       8, action:   'Buy', size:     '20.88000', currency: 'BTC', price:    '$17,927.91', time:     '11:18', status:   'Open',
        },
      ],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = (tab.name === selectedTab.name);
      });
    },
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
    flex: 1 1 590px;
    margin-right: 8px;
  }

  .head {
    display: flex;
    border-bottom: 1px solid #D8D8D8;
  }

  .nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    li {
      flex-basis: 117px;
    }
  }

  .link {
    display: block;
    color: #4E5652;
    background-color: #F4F5F5;
    font-size: 12px;
    font-weight: 600;
    line-height: 17px;
    text-align: center;
    padding: 7.5px 12.5px;
    text-transform: uppercase;
  }

  .active {
    background-color: #66706B;
    color: #FFFFFF;
    box-shadow: inset 0px -2px 0px 0px #5AFFB0;
  }

  .orders {
    font-family: $display-font-stack;
    thead, tbody {
      display: block;
    }

    tbody {
      height: 196px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    td {
      width: 9%;
    }
  }

  .action {
    font-size: 13px;
    letter-spacing: -0.1px;
    line-height: 15px;
  }

  .control {
    display: flex;
    align-items: center;
    padding-right: 16px;
  }

  .navigation {
    margin-left: 10px;
  }


</style>
