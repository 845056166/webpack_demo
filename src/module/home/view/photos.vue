<template>
  <div class="photo_wrapper">
    <BeatifulButton @click-btn="change('prev')" text="上一个" :disable="prevdisable"></BeatifulButton>
    <div class="photos">
      <div :class="['img',  `index${num}`]" v-for="(item, index) in 12" :key="index"></div>
    </div>
    <BeatifulButton @click-btn="change('next')" text="下一个" :disable="nextdisable"></BeatifulButton>
  </div>
</template>
<script lang="ts">
import BeatifulButton from '@/components/beautifulButton.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    BeatifulButton,
  }
})

export default class Photos extends Vue {
  num: number = 1
  get nextdisable(): boolean {
    let flag:boolean = false;
    if (this.num === 6) {
      flag = true;
    }
    return flag;
  }
  get prevdisable(): boolean {
    let flag:boolean = false;
    if (this.num === 1) {
      flag = true;
    }
    return flag;
  }
  change(flag: any): void {
    if (flag === 'prev') {
      this.num --;
    }
    if (flag === 'next') {
      this.num ++;
    }
  }
  shuffle(array: Array<number>): Array<number> {
    for(
      let j: number, x: number, i: number = array.length;
      j = parseInt((Math.random() * i).toString());
      x = array[--i], array[i] = array[j], array[j] = x
    );
    return array;
  };
}
</script>
<style scoped lang="scss">
$row: 4;
$cos: 3;
$num: $row * $cos;
.photo_wrapper {
  text-align: center;
  padding: 20px;
  .photos {
    display: inline-grid;
    width: 500px;
    height: 666px;
    margin: a auto;
    grid-template-columns: repeat(4, 125px);
    grid-template-rows: repeat(3, 222px);
    >.img {
      box-shadow: 1px 1px 3px #000;
      @for $i from 1 through 12{
        &:nth-child(#{$i}) {
          transition: background-image #{random()}s cubic-bezier(0.4, 0, 1, 1) #{.1*random()}s;
        }
      }
      @for $i from 1 through 6{
        &.index#{$i} {
          background-image: url('../assets/images/#{$i}.png');
        }
      }
      @for $i from 1 through $num{
        &:nth-child(#{$i}) {
          @if $i <= 4 { 
            background-position: -#{0 - (-125 * ($i - 1))}px 0;
          }
          @if $i > 4 and $i <= 8{ 
            background-position: -#{0 - (-125 * ($i - 4 - 1))}px -222px;
          }
          @if $i > 8 and $i <= 12{ 
            background-position: -#{0 - (-125 * ($i - 8 - 1))}px -444px;
          }
          // @if $i > 18 and $i <= 24{ 
          //   background-position: -#{0 - (-125 * ($i - 18 - 1))}px -375px;
          // }
        }
      }
    }
  }
}
</style>
