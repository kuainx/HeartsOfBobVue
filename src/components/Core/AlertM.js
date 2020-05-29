import Vue from "vue";
import AlertM from "./Alert.vue";

/* extend message create constructor */
// 1.创建组件构造函数
const MessageConstructor = Vue.extend(AlertM);

/* init instance function */
const init = options => {
    // instantiation constructor
    // 2.实例化组件
    const instance = new MessageConstructor();

    // merge data property
    // 3.将传递参数直接覆盖原实例 data 定义参数
    Object.assign(instance, options);

    // create virtual DOM and append to document
    // 4.渲染为文档之外元素，也可理解为虚拟 DOM，然后追加到文档
    document.body.appendChild(instance.$mount().$el);

    // return this instance
    // 5.返回组件实例
    return instance;
};

/* caller */
// 5.创建命令调用函数，并接受参数
// 形参需要为对象形式，并且命名需要和 data 定义参数一致，当然你也可以细化封装
const caller = options => {
    // init instance
    // 6.初始化 DOM
    const instance = init(options);

    // call show function
    // 7.调用实例 show 方法
    instance.show=true;
};

/* export install function */
// 8.导出安装方法
export default function(vue) {
    // 9.在 Vue 原型上挂载命令调用函数
    vue.prototype.$AlertM = caller;
}
// from https://anciity.github.io/post/vue-ru-he-kai-fa-yi-ge-ming-ling-shi-dan-chuang-zu-jian/
