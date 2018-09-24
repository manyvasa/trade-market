<template>
  <div id="app">
    <Header/>
    <layout/>

  </div>
</template>

<script>
import Header from './components/header/Header';
import layout from './components/layout/Layout';

export default {
  components: {
    Header,
    layout,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
  @import "@/styles/variables.scss";

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }


  @font-face {
    font-family: 'Open Sans';
    font-weight: normal;
    font-style: normal;
    src: local('Open Sans'), local('Open-Sans'),
    url('/components/assets/fonts/OpenSans.woff') format('woff');

  }

  @font-face {
    font-family: ".SF NS Display";
    font-weight: 400;
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #F5F5F5;
    font-family: $default-font-stack;
  }

  a {
    text-decoration: none;
    padding: 0;
    margin: 0;
  }

  button {
    display: inline-block;
    outline: 0;
    border: 0;
    padding: 0;
    margin: 0;
    background: none;
    cursor: pointer;
    user-select: none;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .icon {
    display: inline-block;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    vertical-align: middle;
  }

</style>
