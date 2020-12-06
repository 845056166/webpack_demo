<template>
  <div class="onpage" @mousewheel="onScroll" ref="container">
      <div class="page slideInUp"
      v-if="nowIndex === 0">
        嘻嘻
      </div>
      <div class="page slideInUp">
          哈哈
      </div>
      <div class="page slideInUp">
          呵呵
      </div>
      <!-- <div style="height: 200px;overflow: scroll" @scroll="onScroll">
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
        <p>asdasfafa</p>
    </div> -->
  </div>
  
</template>
<script>
import { type } from 'os';
export default {
  props: {
    nowIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    height() {
      return `${window.innerHeight}px`;
    },
  },
  methods: {
    onScroll(e) {
      const delta = -e.originalEvent.wheelDelta || e.originalEvent.detail;
      console.log(e);
      
      if (delta > 0) {
        console.log('下滚')
      }
      if (delta < 0) {
        console.log('上滚')
      }
    },
  },
  mounted() {
    // const height = window.innerHeight;
    // const pages = document.querySelectorAll('.page');
    // Array.from(pages).forEach(() => {
    const container = this.$refs.container;
    // container.addEventListener('mousewheel', function(e) {
    //   console.log(1);
    // })
    // });
  }
}
</script>
<style lang="scss" scoped>
.onpage {
    height: 100%;
    overflow: scroll;
  .page {
    width: 100%;
    height: 100%;
  }
  @keyframes slideInUp {
    from {
        transform: translate3d(0, 100%, 0);
        visibility: visible;
    }
    to {
        transform: translate3d(0, 0, 0);
    }
}
.slideInUp {
  animation: slideInUp 2s;
}
}
</style>