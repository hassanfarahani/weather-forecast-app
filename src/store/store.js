import Vue from 'vue'
import Vuex from 'vuex'

import current from './modules/current'
import forecast from './modules/forecast'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
       current,
       forecast
    }
});