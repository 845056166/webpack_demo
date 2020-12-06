<template>
  <div class="main_wrapper">
    <smart-list :list="list" v-model="value"></smart-list>
  </div>
</template>
<script lang="ts">
import smartList from '../components/smartList.vue'
// import Component from 'vue-class-component';
// vue-property-decorator is the super class of vue-class-component
import { Component, Prop, Vue } from 'vue-property-decorator'

interface Item {
  time: string,
  title: string,
  desc: string,
}
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
@Component({ // 引入子组件 
  components: {
    smartList
  }
})

export default class Homepage extends Vue {
  list: Array<Item> = [
    {
      time: '2018.11.30',
      title: '我发现了你',
      desc: '那是我们第一次见面',
    },
    {
      time: '2018.12.01',
      title: '我去找你',
      desc: '这是我们单独见面的日子，这天晚上牵手👫成功这是我们单独见面的日子，这天晚上牵手👫成功这是我们单独见面的日子，这天晚上牵手👫成功这是我们单独见面的日子，这天晚上牵手👫成功这是我们单独见面的日子，这天晚上牵手👫成功这是我们单独见面的日子，这天晚上牵手👫成功这是我们单独见面的日子，这天晚上牵手👫成功这是我们单独见面的日子，这天晚上牵手👫成功',
    },
    {
      time: '2018.12.01',
      title: '我去找你',
      desc: '这是我们单独见面的日子，这天晚上牵手👫成功',
    },
    {
      time: '2018.12.01',
      title: '我去找你',
      desc: '这是我们单独见面的日子，这天晚上牵手👫成功',
    },
    {
      time: '2018.12.01',
      title: '我去找你',
      desc: '这是我们单独见面的日子，这天晚上牵手👫成功',
    },
  ]
  value: number = 0
}
</script>
<style lang="scss" scoped>
.container {
  img {
    width: 100%;
  }
}
</style>
