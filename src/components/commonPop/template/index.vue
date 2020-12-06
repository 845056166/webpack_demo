<template>
  <div class="popWrapper" v-show="showPop">
     <div>woshi tta</div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CommonPop extends Vue {
  showPop: boolean = false
  show() {
    this.showPop = true;
  }

}
</script>
<style lang="scss" scoped>
.popWrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
