import CommonPopComonents from './template/index.vue';

let $vm: any = undefined;
(CommonPopComonents as any).install = function(Vue) {
  Vue.component(CommonPopComonents.name, CommonPopComonents);
}
const Pop = {
  install(Vue, options = {}) {
    // Vue.component('CommonPop', CommonPopComonents);
    //  = Vue.extend(CommonPopComonents);
    const CommonPop = Vue.extend(CommonPopComonents);
    if (!$vm) {
      $vm = new CommonPop();
      document.body.appendChild($vm.$mount().$el);
    }

    Vue.prototype.$pop = {
      show(options) {
        $vm.options = options;
        $vm.showPop = true;
      }
    }

    // let Layer = Vue.extend(LayerComponent)  
    //     let $vm = new Layer()

    //     Vue.prototype.$layer = { // 在Vue的原型上添加实例方法，以全局调用  //layer 方法
    //         show(opt) { // 控制toast显示的方法  //show 事件
    //             $vm.options = opt;
    //             document.body.appendChild($vm.$mount().$el)   //插入dom
    //         },
    //         hide(opt) { // 控制toast隐藏的方法
    //             console.log(opt)
    //             document.body.removeChild($vm.$mount().$el)
    //         }
    //     }
  }
}
export default Pop;