import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface State {
  state: {
    username: string;
    password: string;
  },
}


export default new Vuex.Store<State>({
  state: {
  },
  mutations: {

  },
  actions: {

  },
});
