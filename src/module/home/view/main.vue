<template>
  <div class="main_wrapper">
    <smart-list></smart-list>
  </div>
</template>
<script>
import { log } from 'util';
import smartList from '../components/smartList';
export default {
  name: 'homepage',
  components: {
    smartList,
  },
  data() {
    return {
    };
  },
  mounted() {
    console.log(this.url);
  }
}
</script>
<style lang="scss" scoped>
.container {
  img {
    width: 100%;
  }
}
</style>
