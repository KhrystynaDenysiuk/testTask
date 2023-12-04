import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { users } from "./modules/users/index";

const store: StoreOptions<RootState> = {
  state: {
    welcomeMessage: "Hello",
  },
  mutations: {},
  actions: {},
  modules: {
    users,
  },
};

export default new Vuex.Store<RootState>(store);
