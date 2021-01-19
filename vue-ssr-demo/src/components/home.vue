<template>
  <div>
    <h1>home222jj</h1>
    <p @click="to">点我跳转</p>
  </div>
</template>
<script>
// import titleMixin from "../mixins/title-mixins.js";
export default {
  name: "home",
  // mixins: [titleMixin],
  methods:{
    to() {
      window.location.href = '/item' //更改跳转方式
    }
  },
  title() {
    return "Home页面";
  },
  data() {
    return {};
  },
};
</script>
<style scoped></style>
