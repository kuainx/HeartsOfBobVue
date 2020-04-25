import Vue from 'vue'
import Antd from 'ant-design-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import './assets/func.js'
import {
    GameData
} from './assets/gameData.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'ant-design-vue/dist/antd.css'
import './assets/main.css'

window.gameData = GameData;
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

window.vm = new Vue({
    render: h => h(App),
    data: {
        gameData: window.gameData,
        runData:{
            speed:1,
            pause:true,
            esc:true,
            sideBar:false
        }
    }
}).$mount('#app')
