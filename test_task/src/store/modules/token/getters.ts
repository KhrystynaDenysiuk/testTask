import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { TokenState } from "./types";

export const getters: GetterTree<TokenState, RootState> = {
  token: (state) => state.token,
};
