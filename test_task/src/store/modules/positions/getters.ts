import type { GetterTree } from "vuex";
import type { RootState } from "@/store/types";
import type { PositionsState } from "./types";

export const getters: GetterTree<PositionsState, RootState> = {
  positions: (state) => state.positions,
};
