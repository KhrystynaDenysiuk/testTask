import type { Module } from "vuex";
import type { RootState } from "@/store/types";
import type { TokenState } from "./types";

import { getters } from "@/store/modules/token/getters";
import { actions } from "@/store/modules/token/actions";

export const state: TokenState = {
  token: null,
};

export const token: Module<TokenState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
};
