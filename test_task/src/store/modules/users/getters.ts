import type { GetterTree } from "vuex";
import type { UsersState } from "@/store/modules/users/types";
import type { RootState } from "@/store/types";

export const getters: GetterTree<UsersState, RootState> = {
  users: (state) => state.users,
  user: (state) => state.user,
  totalPages: (state) => state.totalPages,
};
