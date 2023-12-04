import { GetterTree } from "vuex";
import { UsersState } from "@/store/modules/users/types";
import { RootState } from "@/store/types";

export const getters: GetterTree<UsersState, RootState> = {
  users: (state) => state.users,
  user: (state) => state.user,
  totalPages: (state) => state.totalPages,
};
