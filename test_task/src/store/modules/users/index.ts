import { Module } from "vuex";
import { RootState } from "@/store/types";
import { UsersState } from "@/store/modules/users/types";
import { getters } from "@/store/modules/users/getters";
import { mutations } from "@/store/modules/users/mutations";
import { actions } from "@/store/modules/users/actions";

export const state: UsersState = {
  users: [],
  user: null,
  totalPages: 0,
};

export const users: Module<UsersState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
