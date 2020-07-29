import Vue from 'vue'
import App from './App.vue'
import './assets/func.js'
import {
    GameData
} from './assets/gameData.js'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/mdbvue.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/mdb-pro.css'
import './assets/main.css'
import './fonts/fonts.css'

import AlertM from './components/Core/AlertM.js'
Vue.use(AlertM);
import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
    Vue.component(component, mdbvue[component])
}
window.gameData = GameData;
Vue.config.productionTip = false;

window.vm = new Vue({
    render: h => h(App),
    data: {
        gameData: window.gameData,
        runData: {
            speed: 1,
            pause: true,
            esc: true,
            sideBar: false,
            focus: false
        }
    }
}).$mount('#app')
