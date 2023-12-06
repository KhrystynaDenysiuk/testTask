import type { ActionTree } from "vuex";
import type { RootState } from "@/store/types";
import type { PositionsState } from "./types";
import { PositionsMutations } from "./mutations";
import { BASE_URL } from "@/baseUrl";

export const actions: ActionTree<PositionsState, RootState> = {
  async getPositions({ commit }) {
    try {
      const response = await fetch(`${BASE_URL}/positions`);
      const positions = await response.json();

      commit(PositionsMutations.show_positions, { positions });
    } catch (error: any) {
      console.error(error);
    }
  },
};
