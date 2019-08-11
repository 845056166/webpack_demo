<template>
    <div class="container">
        <div>{{title}}</div>
        <img :src="usl" alt="">
    </div>
</template>
<script>
export default {
  data() {
    return {
        title: '测试组建3',
        usl: require('../assets/images/1.png'),
    }
  }
}
</script>
<style scoped>

</style>
