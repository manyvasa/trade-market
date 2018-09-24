<template>
  <div class="acc-box">
    <div class="acc-box__header">
      <div class="acc-box__title">
        <span>Account Value</span>
      </div>
      <div class="acc-box__meanings">
        <div class="acc-box__total-amount">
          <span>$172,994.85*</span>
        </div>
        <div class="acc-box__total-change">
          <div class="total-change__percentages">
            <svg class="percentages--up"
                 width="7"
                 height="7"
                 viewBox="0 0 24 24">
              <path d="M12 0l8 9h-6v15h-4v-15h-6z"/>
            </svg>
            <span>1.8%</span>
          </div>
          <div class="total-change__currency">
            <span>$3,036.59</span>
          </div>
        </div>
      </div>
    </div>
    <div class="acc-box__area">
      <div class="acc-box__table">
        <table class="table">
          <tbody>
            <tr
              v-for="item in data"
              :key="item.id"
            >
              <td class="table__name">{{ item.name }}</td>
              <td class="table__value">{{ item.value }}</td>
              <td class="table__price">
                <span>{{ item.price }}</span>
              </td>
              <td class="table__act">
                <a href="/"
                   class="table__btn">
                  <svg class="icon"
                       width="12"
                       height="12"
                       viewBox="0 0 24 24">
                    <path
                      d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm17-1h-4v8h-2v-8h-4l5-6 5 6z"/>
                  </svg>
                </a>
                <a href="/"
                   class="table__btn">
                  <svg class="icon"
                       width="12"
                       height="12"
                       viewBox="0 0 24 24">
                    <path
                      d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-17 1h4v-8h2v8h4l-5 6-5-6z"/>
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="acc-box__usd">
        <div class="acc-box__usd-title">
          <span>USD Account</span>
        </div>
        <div class="acc-box__usd-meanings">
          <span>$150,642.88</span>
          <div class="acc-box__usd-act">
            <a href="/"
               class="table__btn">
              <svg class="icon"
                   width="12"
                   height="12"
                   viewBox="0 0 24 24">
                <path
                  d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm17-1h-4v8h-2v-8h-4l5-6 5 6z"/>
              </svg>
            </a>
            <a href="/"
               class="table__btn">
              <svg class="icon"
                   width="12"
                   height="12"
                   viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccTool',
  data() {
    return {
      data: [
        {
          id:    1, name:  'BTC Bitcoin', value: '1.01011', price: '($11,705.90)',
        },
        {
          id:    2, name:  'ETH Etherium', value: '3.45100', price: '($1,825.58)',
        },
        {
          id:    3, name:  'LTC Litecoin', value: '3.06400', price: '($496.37)',
        },
        {
          id:    4, name:  'BTCH Bitcoin Cash', value: '4.97900', price: '($4,974.02)',
        },
        {
          id:    5, name:  'XRP Ripple', value: '5000.12345', price: '($3,350.08)',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/variables.scss";

  .acc-box {
    background-color: #FFFFFF;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.14),
    0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 1px 3px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    &__header {
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    &__title {
      opacity: 0.8;
      color: $gray-text;
      font-size: 12px;
      font-weight: 600;
      line-height: 17px;
      padding: 8px 16px;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }

    &__meanings {
      display: flex;
      flex-grow: 1;
      justify-content: space-between;
      align-items: center;
    }

    &__total-amount {
      opacity: 0.8;
      color: $gray-text;
      font-size: 12px;
      font-weight: 600;
      line-height: 17px;
      text-align: center;
      padding: 8px 10px 8px;
    }

    &__total-change {
      display: flex;
      flex-wrap: nowrap;
      flex-grow: 1;
      justify-content: center;
      align-items: center;
    }

    .total-change__percentages,
    .total-change__currency {
      opacity: 0.8;
      color: $gray-text;
      font-family: $display-font-stack;
      font-size: 10px;
      line-height: 12px;
      text-align: right;
      padding: 8px 8px 8px;
    }

    &__area {
      padding: 0 9px 16px 9px;
    }

    &__table {
      padding: 0 7px;
    }

    &__usd {
      display: flex;
      justify-content: space-between;
      padding: 13px 8px;
      margin-top: 11px;
      border-radius: 4px;
      background-color: #F4F5F5;

      &-title {
        opacity: 0.8;
        color: $gray-text;
        font-size: 13px;
        font-weight: 600;
        line-height: 15px;
      }
      &-meanings {
        display: flex;
        opacity: 0.8;
        color: $gray-text;
        font-family: $display-font-stack;
        font-size: 13px;
        line-height: 15px;
        flex-basis: 60%;
        justify-content: space-between;
      }
    }
  }

  .table {
    width: 100%;
    max-width: 100%;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 0;
    padding: 0;
    border: 0;
    display: table;
    line-height: 15px;
    font-size: 13px;
    color: $gray-text;

    tr {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    td {
      height: 32px;
      padding: 0;
    }

    &__name {
      font-weight: 600;
      letter-spacing: -0.3px;
    }

    &__value {
      font-family: $display-font-stack;
      text-align: right;
    }

    &__price {
      font-weight: 300;
      letter-spacing: -0.1px;
      text-align: right;
    }

    &__act {
      text-align: right;
    }

    &__btn {
      padding-left: 4px;
      color: #C4CAC7;
    }
  }

  .percentages {
    &--up {
      fill: $green;
    }

    &--down {
      fill: #c73535;
      transform: rotate(180deg);
    }
  }

</style>
