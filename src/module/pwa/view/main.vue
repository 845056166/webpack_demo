<template>
  <div class="wrapper">
    <p>{{title}}</p>
     <ul>
        <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
     </ul>
  </div>
</template>
<script>
import { requestData, API } from '../service';
export default {
  name: 'pwa',
  data() {
    return {
      title: 'hello PWA',
      list: []
    };
  },
  created() {
    requestData(API.queryNews).then((res) => {
      const { title, list } = res.data;
      this.title = title;
      this.list = list;
    }).catch((error) => {
      console.log(error);
    })
  },
}
</script>
<style scoped>

</style>
