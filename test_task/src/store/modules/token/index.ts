import { Module } from "vuex";
import { RootState } from "@/store/types";
import { getters } from "@/store/modules/token/getters";
import { actions } from "@/store/modules/token/actions";
import { TokenState } from "./types";

export const state: TokenState = {
  token: null,
};

export const token: Module<TokenState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
};
