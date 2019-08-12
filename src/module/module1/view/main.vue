<template>
    <div class="container">
        <div>{{title}}</div>
        <img src="../assets/images/1.png" alt="">
    </div>
</template>
<script>
import { log } from 'util';
export default {
  data() {
    return {
      title: '测试组建3',
      url: require('../assets/images/1.png'),
    };
  },
  mounted() {
    console.log(this.url);
  }
}
</script>
<style lang="scss" scoped>
.container {
  background: url('../assets/images/1.png') no-repeat center;
  img {
    width: 100%;
  }
}
</style>
