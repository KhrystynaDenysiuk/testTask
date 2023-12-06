import type { Module } from "vuex";
import type { PositionsState } from "./types";
import type { RootState } from "@/store/types";
import { getters } from "@/store/modules/positions/getters";
import { mutations } from "@/store/modules/positions/mutations";
import { actions } from "@/store/modules/positions/actions";

export const state: PositionsState = {
  positions: [],
};

export const positions: Module<PositionsState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
