import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { UsersState } from "@/store/modules/users/types";
import { UsersMutations } from "./mutations";
import { BASE_URL } from "@/baseUrl";

export const actions: ActionTree<UsersState, RootState> = {
  async getUsers({ commit }, payload) {
    try {
      const response = await fetch(
        `${BASE_URL}/users?page=${payload?.page || 1}&count=6`
      );

      const users = await response.json();
      const totalPages = users.total_pages;

      commit(UsersMutations.show_users, { users });
      commit(UsersMutations.show_users_total_pages, totalPages);
    } catch (error: any) {
      console.error(error);
    }
  },
};
