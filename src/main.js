import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import {
    GameData
} from './assets/gameData.js'
import 'ant-design-vue/dist/antd.css'
import './assets/main.css'

window.gameData = GameData;
Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
    render: h => h(App),
    data: {
        gameData: window.gameData
    }
}).$mount('#app')
