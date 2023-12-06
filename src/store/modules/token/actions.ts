import type { ActionTree } from "vuex";
import type { RootState } from "@/store/types";
import { BASE_URL } from "@/baseUrl";
import type { TokenState } from "./types";

export const actions: ActionTree<TokenState, RootState> = {
  async getToken(_) {
    try {
      const response = await fetch(`${BASE_URL}/token`);
      const result = await response.json();

      localStorage.setItem("token", result.token);
    } catch (error: any) {
      console.error(error);
    }
  },
};
