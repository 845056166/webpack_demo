<template>
  <div class="container">
    <section class="main">
      <ul class="timeline">
        <li class="event" v-for="(item, index) in list" :key="index">
          <input type="radio" name="tl-group" :value="index" v-model="checked"/>
          <label></label>
          <div :class="['thumb', 'user-'+(index+1)]"><span>{{item.time}}</span></div>
          <div class="content-perspective">
            <div class="content">
              <div class="content-inner">
                <h3>{{item.title}}</h3>
                <p>{{item.desc}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  props: {
    // list: {
    //   type: Array,
    //   default: () => [
    //     {
    //       time: '01 Dec',
    //       title: '我发现了你',
    //       desc: '那是我们第一次见面',
    //     },
    //   ]
    // },
    // value: {
    //   type: Number,
    //   default: 0,
    // }
  }
})

export default class SmartList extends Vue {
  @Prop({
    type: Array,
    default: () => [
      {
        time: '01 Dec',
        title: '我发现了你',
        desc: '那是我们第一次见面',
      },
    ]// 是否必填
  })  list !: Array<Object>;
  @Prop({
    type: Number,
    default: 0// 是否必填
  })  value !: number;
  checked: number = this.value

  @Watch("checked")
  getchecked(newval: any) {
    this.$emit('input', this.checked);
  }
  @Watch("value")
  getvalue(newval: any) {
    this.checked = newval;
    this.$emit('input', this.checked);
  }
  mounted() {
    document.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowDown') {
        if (this.checked === this.list.length - 1) return;
        this.checked++;
      }
      if (e.key === 'ArrowUp') {
        if (this.checked === 0) return;
        this.checked--;
      }
    })
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/lanrenzhijia.css';

</style>