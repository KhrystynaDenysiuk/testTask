import { Module } from "vuex";
import { RootState } from "@/store/types";
import { getters } from "@/store/modules/positions/getters";
import { mutations } from "@/store/modules/positions/mutations";
import { actions } from "@/store/modules/positions/actions";
import { PositionsState } from "./types";

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
