import Vuex, { type StoreOptions } from "vuex";
import type { RootState } from "./types";
import { users } from "./modules/users/index";
import { positions } from "./modules/positions/index";
import { token } from "./modules/token/index";

const store: StoreOptions<RootState> = {
  state: {
    welcomeMessage: "Hello",
  },
  mutations: {},
  actions: {},
  modules: {
    users,
    positions,
    token,
  },
};

export default new Vuex.Store<RootState>(store);
