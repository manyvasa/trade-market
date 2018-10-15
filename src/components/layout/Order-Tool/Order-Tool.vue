<template>
  <div class="order-box">
    <div class="order-box__header">
      <div class="order-box__header-pair">
        <span class="order-box__cps">Currency Pair</span>
        <div>
          <a href="#"
             class="order-box__ps">BTC/LTC</a>
        </div>
      </div>
      <div class="order-box__header-act">
        <button type="button"
                class="order-box__btn-b btn btn--active">
          buy
        </button>
        <button type="button"
                class="order-box__btn-s btn">
          sell
        </button>
      </div>
    </div>
    <div class="order-box__area">
      <order-tabs/>
    </div>
  </div>
</template>

<script>
import OrderTabs from './Order-tabs';

export default {
  name:       'OrderTool',
  components: {
    OrderTabs,
  },
};
</script>

<style lang="scss">
  @import "@/styles/variables.scss";

  .order-box {
    height: 560px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.14);
    background-color: $gray;
    border-radius: 4px;

    &__header {

      &-pair {
        display: flex;
        background-color: $gray-text;
        padding: 0 12px;
        border-radius: 4px 4px 0 0;
      }

      &-act {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 76px;
        background-color: #66706B;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12),
        0 2px 4px 0 rgba(0, 0, 0, 0.2);
      }
    }

    &__layout {
      padding: 0;
    }

    &__cps {
      height: 40px;
      width: 89px;
      color: #FFFFFF;
      font-size: 12px;
      font-weight: 600;
      line-height: 17px;
      display: block;
      padding: 10px 0;
      margin-right: 20px;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }

    &__ps {
      height: 40px;
      width: 82px;
      color: $white;
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;
      padding: 8px 0;
      display: block;
    }

    &__btn-b, &__btn-s {
      border: 1px solid #97A19C;
      background-color: $gray-text;
      color: $gray;
      width: 165px;
      height: 40px;
    }

    &__btn-b {
      border-radius: 4px 0 0 4px;
    }

    &__btn-s {
      border-radius: 0 4px 4px 0;
    }
  }

  .order-box__area {
    padding: 0 12px 32px 12px;
  }

  .btn {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;

    &--active {
      background-color: $green;
      border: 0;
      color: $white;
    }

    &:hover {
      opacity: 0.9;
    }
  }

</style>
