import Vue from 'vue'
import Vuex from 'vuex'
// import  axios from 'vue-axios';
// import DashboardService from "@/services/dashboard";

Vue.use(Vuex)

import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

export default new Vuex.Store ({
  state,
  getters,
  mutations,
  actions
});