<template>
    <div>
        <myheader></myheader>
        <div class="scroller">
            <ul>
                <li>
                    <img src="../assets/images/1.png" alt="">
                    <img src="../assets/images/2.png" alt="">
                    <img src="../assets/images/3.png" alt="">
                </li>
            </ul>
        </div>
        <div class="test">
            <search placeholder="请输入" v-model="text"></search>
        </div>
    </div>
</template>
<script>
import myheader from './header.vue'; 
import search from './search.vue'; 
export default {
    name: 'mybody',
    data() {
        return {
            text: '测试'
        };
    },
    components: {
      myheader,
      search,
    },
}
</script>
<style lang="scss" scoped>
    .scroller {
        width: 100%;
        overflow: hidden;
        ul {
            width: 100%;
            white-space: nowrap;
            overflow-x: auto;
            padding: 0 20px;
            li {
                display: inline-block;
                img {
                    width: 200px;
                    height: 100px;
                    overflow-x: auto;
                    overflow-y: hidden;
                }
            }
        }
    }
    .test {
        width: 100%;
        height: 200px;
        background-color: red;
    }
</style>
