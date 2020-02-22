import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import './assets/func.js'
import {
    GameData
} from './assets/gameData.js'
import './assets/inDB.js'
import 'ant-design-vue/dist/antd.css'
import './assets/main.css'

window.gameData = GameData;
Vue.config.productionTip = false
Vue.use(Antd);

window.vm = new Vue({
    render: h => h(App),
    data: {
        gameData: window.gameData,
        runData:{
            speed:1,
            esc:true
        }
    }
}).$mount('#app')
