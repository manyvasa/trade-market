<template>
  <div class="header">
    <div class="header__wrapper">
      <nav class="navbar">
        <ul class="navbar__nav">
          <li
            v-for="(item, index) in navItem"
            :key="index"
          >
            <a href=""
               class="navbar__link">{{ item }}</a>
          </li>
        </ul>
        <a href="#"
           class="navbar__link navbar__link--active navbar__link--user">Joe Username</a>
      </nav>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navItem: [
        'Dashboard',
        'Portfolio',
        'Convert',
        'Trade',
        'Tools',
        'History',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/variables.scss";

  .header {
    width: 100%;
    background-color: $green;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: flex-start;

    &__wrapper {
      height: 48px;
      width: 100%;
      max-width: 1880px;
      display: flex;
      justify-content: space-between;
    }
  }

  .navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;

    &__nav {
      list-style: none;
      display: flex;
      align-items: center;
      padding: 0;
      margin: 0 0 0 100px;
    }

    &__link {
      color: #FFFFFF;
      font-family: $default-font-stack;
      font-size: 12px;
      font-weight: bold;
      line-height: 17px;
      text-align: center;
      padding: 15.5px 12.5px;
      opacity: 0.7;
      display: block;
      height: 48px;
      width: 100px;

      &:hover {
        box-shadow: inset 0px -2px 0px 0px #5AFFB0, inset 0px 2px 0px 0px #5AFFB0;
      }

      &--active {
        opacity: 1;
      }

      &--user {
        width: auto;
      }
    }
  }


</style>
