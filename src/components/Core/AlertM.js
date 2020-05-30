import Vue from "vue";
import AlertM from "./Alert.vue";

let MessageConstructor = Vue.extend(AlertM);
let init = options => {
    let instance = new MessageConstructor();
    options['is' + options.color] = true;
    if (!options.icon) {
        switch (options.color) {
            case 'danger':
                options.icon = 'exclamation';
                break;
            case 'warning':
                options.icon = 'question';
                break;
            case 'info':
                options.icon = 'info';
                break;
            case 'success':
                options.icon = 'check';
                break;
        }
    }
    Object.assign(instance, options);
    document.body.appendChild(instance.$mount().$el);
    return instance;
};
let caller = options => {
    let instance = init(options);
    instance.show = true;
};
export default function(vue) {
    vue.prototype.$AlertM = caller;
}
