import Vue from 'vue'
import Vuex from 'vuex'
import { modal } from './modal/modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal
  },
});