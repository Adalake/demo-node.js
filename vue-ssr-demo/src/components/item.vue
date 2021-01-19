<template>
  <div>item页 请求数据结果：233</div>
</template>
<script>
// import titleMixin from '../mixins/title-mixins.js';
export default {
  name: "item",
  // mixins: [titleMixin],
  title() {
    return "item页面";
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item() {},
  },
};
</script>

<style scoped></style>
