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
  async addUser({ dispatch }, data) {
    try {
      const formData = new FormData();
      formData.append("position_id", data.position_id);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("photo", data.photo[0].file);

      const token = localStorage.getItem("token") || "";

      await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
          Token: token,
        },
        body: formData,
      });

      dispatch("getUsers", { page: 1 });
    } catch (error: any) {
      console.error(error);
    }
  },
};
