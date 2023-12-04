import { MutationTree } from "vuex";
import { UsersState } from "@/store/modules/users/types";

export enum UsersMutations {
  show_users = "show_users",
  show_users_total_pages = "show_users_total_pages",
}

export const mutations: MutationTree<UsersState> = {
  [UsersMutations.show_users](state, payload) {
    if (payload.users.page === 1) {
      state.users = [...payload.users.users].sort((a: any, b: any) => {
        return b.registration_timestamp - a.registration_timestamp;
      });
    } else {
      state.users = [...state.users, ...payload.users.users].sort(
        (a: any, b: any) => {
          return b.registration_timestamp - a.registration_timestamp;
        }
      );
    }
  },
  [UsersMutations.show_users_total_pages](state, totalPages) {
    state.totalPages = totalPages;
  },
};
