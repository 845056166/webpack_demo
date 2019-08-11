<template>
    <div>
        <myheader></myheader>
        <div class="wrapper">
            <div class="scroller">
                <div class="ul">
                <ul>
                    <li>
                        <img src="../assets/images/1.png" alt="">
                        <img src="../assets/images/2.png" alt="">
                        <img src="../assets/images/3.png" alt="">
                    </li>
                </ul>
                </div>
                
                <ul>
                    <li>
                        <img src="../assets/images/1.png" alt="">
                        <img src="../assets/images/2.png" alt="">
                        <img src="../assets/images/3.png" alt="">
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../assets/images/1.png" alt="">
                        <img src="../assets/images/2.png" alt="">
                        <img src="../assets/images/3.png" alt="">
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../assets/images/1.png" alt="">
                        <img src="../assets/images/2.png" alt="">
                        <img src="../assets/images/3.png" alt="">
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../assets/images/1.png" alt="">
                        <img src="../assets/images/2.png" alt="">
                        <img src="../assets/images/3.png" alt="">
                    </li>
                </ul>
            </div>
            <!-- <div class="test">

            </div> -->
        </div>
        
    </div>
</template>
<script>
import myheader from './header.vue'; 
<<<<<<< HEAD
import search from './search.vue'; 
=======
import BScroll from 'better-scroll';
>>>>>>> 710e8e3e2124acfcc640ca644c96ab47f8646580
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
    mounted() {
        const wrapper =document.querySelector('.wrapper');
        let scroll = new BScroll(wrapper,{
            tap: true,
            eventPassthrough: 'horizontal'
        })
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
    height: 300px;
    overflow: hidden;
}
.ul {
    width: 100%;
}
    .scroller {
        
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
