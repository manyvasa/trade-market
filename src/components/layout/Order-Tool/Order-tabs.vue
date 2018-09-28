<template>
  <div class="order-tabs">
    <ul class="order-tabs__nav">
      <li
        v-for="tab in tabs"
        :key="tab"
      >
        <a
          :class="{ 'is-active': tab.isActive }"
          href="#"
          class="order-tabs__nav-link"
          @click.prevent="selectTab(tab)"
        >
          {{ tab.name }}
        </a>
      </li>
    </ul>
    <div class="order-tabs__area">
      <slot/>
      <tab :selected="true"
           name="Market">
        <div class="order-tabs__inner-field field-give">
          <label for="amount_1"
                 class="order-tabs__label">Amount</label>
          <input id="amount_1"
                 type="number"
                 placeholder="0.00"
                 class="order-tabs__input">
          <div class="order-tabs__input-border"/>
          <div class="order-tabs__control">
            <span>BTC</span>
            <div class="order-tabs__drop">
              <button>
                <svg class="icon"
                     view-box="0 0 20 20"
                     width="24"
                     height="24"
                     aria-hidden="true">
                  <path d="
          M4 12c-1.105
          0-2-0.895-2-2s0.895-2
          2-2v0c1.105 0 2 0.895
          2 2s-0.895 2-2 2v0zM10
          12c-1.105
          0-2-0.895-2-2s0.895-2
          2-2v0c1.105 0 2 0.895
          2 2s-0.895 2-2 2v0z
          M16 12c-1.105 0-2-0.895-2-2s0.895-2
          2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z"/>
                </svg>
              </button>

            </div>
          </div>
        </div>
        <div class="order-tabs__inner-field field-get">
          <label for="amount_2"
                 class="order-tabs__label">Amount</label>
          <input id="amount_2"
                 type="number"
                 placeholder="0.00"
                 class="order-tabs__input">
          <div class="order-tabs__input-border"/>
          <div class="order-tabs__control">
            <span>BTC</span>
            <div class="order-tabs__drop">
              <button>
                <svg class="icon"
                     view-box="0 0 20 20"
                     width="24"
                     height="24"
                     aria-hidden="true">
                  <path d="
                      M4 12c-1.105
                      0-2-0.895-2-2s0.895-2
                      2-2v0c1.105 0 2 0.895
                      2 2s-0.895 2-2 2v0zM10
                      12c-1.105
                      0-2-0.895-2-2s0.895-2
                      2-2v0c1.105 0 2 0.895
                      2 2s-0.895 2-2 2v0z
                      M16 12c-1.105 0-2-0.895-2-2s0.895-2
                      2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="order-tabs__text fee">
          <div>Fee (USD)……………………</div>
          <div>$0.00</div>
        </div>
        <div class="order-tabs__text total">
          <div>Total (BTC)……………………</div>
          <div>0.00</div>
        </div>
        <button class="order-tabs__confirm btn">BUY BTC</button>
      </tab>
      <tab name="Limit">
        <span>tab Limit</span>
      </tab>
      <tab name="Stop">
        <span>tab Stop</span>
      </tab>
    </div>
  </div>
</template>

<script>
import tab from './tab';

export default {
  name:       'OrderTabs',
  components: {
    tab,
  },
  data() {
    return {
      tabs: [],
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

<style lang="scss" scoped>
  @import "@/styles/variables.scss";

  .order-tabs {
    background-color: #FFFFFF;
    border-radius: 0 0 4px 4px;

    &__nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      li {
        flex-grow: 1;
        flex-basis: 109px;

        &:nth-child(2) {
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          border-left: 1px solid rgba(0, 0, 0, 0.1);
        }
      }

      .is-active {
        background-color: #66706B;
        color: #FFFFFF;
        box-shadow: inset 0px -2px 0px 0px #5AFFB0;
      }
    }

    &__nav-link {
      display: block;
      color: #4E5652;
      background-color: #F4F5F5;
      font-size: 12px;
      font-weight: 600;
      line-height: 17px;
      text-align: center;
      padding: 7.5px 12.5px;
      text-transform: uppercase;

      &--active {
        background-color: #66706B;
      }
    }

    &__area {
      height: 380px;
      padding: 28px 28px 38px 28px;
      background-color: #FFFFFF;
    }

    &__inner-field {
      display: flex;
      //flex: 1;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
    }

    &__control {
      display: flex;
      align-items: center;
      position: absolute;
      top: 19px;
      right: 3px;

      span {
        display: block;
        margin-right: 8px;
        padding-bottom: 1px;
        //width: 105px;
        opacity: 0.6;
        color: #4E5652;
        font-family: $display-font-stack;
        font-size: 15px;
        line-height: 18px;
        text-align: right;
      }

      button {
        color: $gray;
      }
    }

    &__label {
      color: #4E5652;
      font-size: 12px;
      line-height: 15px;
      font-family: $display-font-stack;
    }

    &__input {
      border: 0;
      display: block;
      margin-top: 9px;
      padding-bottom: 4px;
      width: 100%;
      outline-style: none;
      -moz-appearance: textfield;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &:focus + div.order-tabs__input-border {
        background-color: #45C487;
      }

      &::placeholder {
        color: #4E5652;
        opacity: 0.6;
        font-size: 15px;
        line-height: 18px;
        font-family: $display-font-stack;
      }
    }

    &__input-border {
      display: block;
      width: 100%;
      height: 1px;
      background-color: #7E8B85;
      position: relative;
    }

    &__text {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      color: #4E5652;
      font-family: $display-font-stack;
      font-size: 12px;
      line-height: 15px;
    }

    &__confirm {
      background-color: $green;
      height: 36px;
      width: 100%;
      border-radius: 100px;
      color: #FFFFFF;
      position: relative;
      top: 40px;
    }
  }

  .field {
    &-give {
      margin-bottom: 40px;
    }

    &-get {
      margin-bottom: 128px;
    }
  }

  .fee {
    margin-bottom: 7px;
  }


</style>
