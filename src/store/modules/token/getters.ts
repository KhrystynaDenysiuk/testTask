import type { GetterTree } from "vuex";
import type { RootState } from "@/store/types";
import type { TokenState } from "./types";

export const getters: GetterTree<TokenState, RootState> = {
  token: (state) => state.token,
};
